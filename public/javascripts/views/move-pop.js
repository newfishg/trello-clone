var MovePopView = Backbone.View.extend({
  template: App.templates['move-pop'],
  attributes: {
    class: 'card-move-wrapper',
  },

  events: {
    'click .close-pop-window': 'close',
    'change #list-selector': 'setPositionContainer',
    'change #position-selector': 'updatePositionValue',
    'click .move-submit-btn': 'moveCard'
  },

  close: function() {
    this.remove();
    $('.pop-window').hide();
    $('.pop-window-overlay').hide();
  },

  filterByListID: function(listID) {
    return App.cards.where({ listId: listID });
  },

  isInsertIntoList: function(largestPosition, newPosition) {
    return largestPosition >= newPosition;
  },

  triggerNotification: function(newListID) {
    if (this.model.isSubscribe()) {
      activityLog = {
        type: 'moveCard',
        cardID: this.model.get('id'),
        oldListID: this.currentListID,
        newListID: newListID
      };

      App.trigger('updateNotification', activityLog);
    }
  },

  isNotMoved: function(newListID, newPosition) {
    if (newListID === this.currentListID && newPosition === this.currentPosition) {
      this.close();
      return;
    }
  },

  moveCard: function() {
    var self = this;
    var newListID = Number(this.$('#list-selector').val());
    var newPosition = Number(this.$('#position-selector').val());
    var currentPosition = this.currentPosition;
    var newListLength;

    this.isNotMoved(newListID, newPosition);

    if (newListID === this.currentListID) {
      App.trigger('inListCardMove', this.currentListID, currentPosition, newPosition);
      
      this.model.save({ position: newPosition }, { 
        wait: true,
        success: function() {
          App.trigger('listPartialRender', self.currentListID);
        },
      });

    } else {
      App.trigger('originalListPositionUpdate', this.currentListID, currentPosition, -1);

      newListLength = this.filterByListID(newListID).length;

      if (this.isInsertIntoList(newListLength, newPosition)) {
        App.trigger('newListPositionUpdate', newListID, newPosition, 1, insert = true);
      }

      this.model.save({ listId: newListID, position: newPosition }, {
        wait: true,
        success: function() {
          App.trigger('listPartialRender', newListID);
          App.trigger('listPartialRender', self.currentListID);
        },
      });
    }

    this.triggerNotification(newListID);
    this.close();
  },

  updatePositionValue: function(e) {
    var value = Number($(e.target).val());
    this.$('.position-selector-container .value').text(value);
  },

  setPositionContainer: function(e) {
    var listID = Number($(e.target).val());
    var listTitle = App.lists.findWhere({ id: listID }).get('title');
    this.loadPositionButton(listID);

    this.$('.list-selector-container .value').text(listTitle);
  },

  loadPositionButton: function(listID) {
    var self = this;
    var offset = (listID === this.currentListID ? 1 : 2 );

    var positionTemplate = App.templates['actions-position-list'];
    var positionList = _.range(1, App.cards.where({ listId: listID }).length + offset);
    positionList = positionList.map(function(position) {
      return {
        position: position,
        cardCurrentPosition: self.currentPosition,
        listID: listID,
        cardCurrentListID: self.currentListID,
       };
    })

    this.$('.position-selector-container').html(positionTemplate({ currentPosition: this.currentPosition, positions: positionList }));

    this.positionButtonInitialSet(this.currentListID, listID, this.currentPosition);
  },

  positionButtonInitialSet: function(cardCurrentListID, listID, currentPosition) {
    if (cardCurrentListID === listID) {
      this.$('#position-selector').val(currentPosition);
    } else {
      var lastOption = this.$('#position-selector').children().length
      this.$('.position-selector-container .value').text(lastOption);
      this.$('#position-selector').val(lastOption);
    }
  },

  loadListButton: function(listID) {
    var listTemplate = App.templates['actions-lists-list'];
    var otherListCollection =  _.filter(App.lists.toJSON(), function(object) { return object.id !== listID });
    var currentList = App.lists.findWhere({id: listID}).toJSON();
    this.$('.list-selector-container').html(listTemplate({ otherLists: otherListCollection, current: currentList}));
  },

  render: function() {
    this.$el.html(this.template());

    $('.pop-window').html(this.el);
    this.loadListButton(this.currentListID);
    this.loadPositionButton(this.currentListID);
  },

  initialize: function(options) {
    this.currentPosition = this.model.get('position');
    this.currentListID = this.model.get('listId');
    this.render();
  }
});