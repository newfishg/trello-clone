var CopyPopView = Backbone.View.extend({
  template: App.templates['copy-pop'],
  attributes: {
    class: 'card-copy-wrapper'
  },

  events: {
    'click .close-pop-window': 'close',
    'change #list-selector': 'setPositionContainer',
    'change #position-selector': 'updatePositionValue',
    'click .create-submit-btn': 'createCard'
  },

  close: function() {
    this.remove();
    $('.pop-window').hide();
    $('.pop-window-overlay').hide();
  },

  createCard: function() {
    var self = this;
    var oldCardID = this.model.get('id')
    var newCardName = this.$('.copy-card-name-input').val() || this.model.get('title');
    var newListID = Number(this.$('#list-selector').val());
    var newPosition = Number(this.$('#position-selector').val());
    var copyComment = false;
    var cardData = {}

    if (this.$('#copy-labels-check').is(':checked')) {
      cardData.labels = this.model.get('labels');
    }

    if (this.$('#copy-comments-check').is(':checked')) {
      cardData.comments = this.model.get('comments');
      // find all comments in App.comments which match cardId and create all of it
      copyComment = true;
    }

    cardData.title = newCardName;
    cardData.position = newPosition;
    cardData.listId = newListID;

    App.trigger('newListPositionUpdate', newListID, newPosition, 1, insert = true);
    App.cards.create(cardData, {
      success: function(json) {
        App.trigger('listPartialRender', newListID);

        if (copyComment) {
          App.trigger('copyCardComments', oldCardID);
        }

        self.triggerNotification(oldCardID, json.get('id'), self.currentListID, newListID);
      }
    });

    this.close();
  },

  triggerNotification: function(oldCardID, newCardID, oldListID, newListID) {
    if (this.model.isSubscribe()) {
      var activityLog = {
        type: 'copyCard',
        cardID: oldCardID,
        newCardID: newCardID,
        oldListID: oldListID,
        newListID: newListID
      };

      App.trigger('updateNotification', activityLog);
    }
  },

  haveLabelsOrComments: function() {
    this.model.get('labels');
    this.model.get('comments');
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

    var positionTemplate = App.templates['actions-position-list'];
    var positionList = _.range(1, App.cards.where({ listId: listID }).length + 2);
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

  loadDefaultTitle: function() {
    this.$('.copy-card-name-input').val(this.model.get('title'));
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('.pop-window').html(this.el);
    this.loadDefaultTitle();
    this.loadListButton(this.currentListID);
    this.loadPositionButton(this.currentListID);
  },

  initialize: function(options) {
    this.currentPosition = this.model.get('position');
    this.currentListID = this.model.get('listId');
    this.render();
  }
});