var ListsView = Backbone.View.extend({
  el: '.lists-container',
  events: {
    'click .open-list-composer': 'openListComposer',
    'click .exit-list-composer': 'closeListComposer',
    'submit .new-list-form': 'createNewlist'
  },

  createNewlist: function(e) {
    e.preventDefault();
    var $f = this.$('.new-list-form');
    var $nameInput = this.$('.list-name-input');

    if (this.notEmptyListName()) {
      $.ajax({
        url: $f.attr('action'),
        type: $f.attr('method'),
        data: $f.serialize(),
        success: function(json) {
          App.trigger('addNewList', json);
        }
      });
      this.listComposerReset();
      this.closeListComposer();
    }
  },
  notEmptyListName: function() {
    return this.$('.new-list-form').find('input[type="text"]').val() !== '';
  },
  listComposerReset: function() {
    this.$('.list-name-input').val('');
  },

  closeListComposer: function() {
    this.$('.open-list-composer').show();
    this.$('.list-composer').hide();
  },
  openListComposer: function(e) {
    e.preventDefault();
    $(e.target).hide();
    this.$('.list-composer').show();
    this.$('.list-name-input').focus();
  },

  render: function() {
    if (this.collection.length !== 0) {
      this.collection.each(this.renderList.bind(this));
    }
    
    this.renderNewlistBlock();
  },
  renderList: function(list) {
    var listView = new ListView({
      model: list
    });

    this.$el.append(listView.el);
  },
  renderNewList: function(list) {
    var listView = new ListView({
      model: list
    });
    $(listView.el).insertBefore('.new-list');
  },
  listSortable: function() {
    var self = this;

    this.$el.sortable({
      containment: 'document',
      cursor: 'pointer',
      helper: 'clone',
      tolerance: 'pointer',
      handle: '.list-drag-handle',
      items: '> div:not(.new-list)',
      placeholder: 'list-placeholder',
      zIndex: 9999,
      start: function(e, ui) {
        ui.placeholder.width(ui.helper.width());
        ui.placeholder.height(ui.helper.height());
        ui.helper.addClass('helper-tilt');
      },
      update: function(e, ui) {
        var listPositionArray = self.$el.sortable('toArray', { attribute: 'data-list-id' });
        App.trigger('updateListsPosition', listPositionArray);
      }
    });
  },

  renderNewlistBlock: function() {
    var newListView = new NewlistView();
    this.$el.append(newListView.el);
  },
  initialize: function() {
    this.render();
    this.listSortable();
    this.listenTo(this.collection, 'add', this.renderNewList);
  }

});