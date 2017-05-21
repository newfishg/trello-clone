var ArchivePopView = Backbone.View.extend({
  template: App.templates['archive-pop'],

  attributes: {
    class: 'archive-wrapper'
  },

  events: {
    'click .close-pop-window': 'close',
    'click .delete-submit-btn': 'deleteConfirm'
  },

  deleteConfirm: function() {
    var self = this;

    if (this.model.isSubscribe()) {
      var activityLog = {
        type: 'archive',
        cardName: this.model.get('title')
      };

      App.trigger('updateNotification', activityLog);
    }

    this.model.destroy({ 
      success: function(model, response) {
        App.trigger('deleteCardComments', self.model.get('id'));
        App.trigger('listPartialRender', self.currentListID);
        App.trigger('renderIndexView');
        router.navigate('/');
      }
    });
  },

  close: function() {
    this.remove();
    $('.pop-window').hide();
    $('.pop-window-overlay').hide();
  },

  render: function() {
    this.$el.html(this.template());

    $('.pop-window').html(this.el);
  },

  initialize: function() {
    this.currentListID = this.model.get('listId');
    this.render();
  }
});