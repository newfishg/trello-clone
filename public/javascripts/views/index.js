var IndexView = Backbone.View.extend({
  el: 'body',
  template: App.templates.index,

  events: {
    'click #modal-overlay': 'closeModalByOverlay',
    'click .open-notification-btn': 'showNotifications',
  },

  showNotifications: function() {
    this.$('.subscribe-activity').toggle();
      
    if ($('.header-notification').hasClass('bell-active')) {
      $('.header-notification').removeClass('bell-active');
    }
  },

  closeModalByOverlay: function(e) {
    if (e.target === e.currentTarget) {
      this.closeModal();
    }
  },

  closeModal: function(e) {
    App.trigger('renderIndexView');
    router.navigate('/');
  },
  
  render: function() {
    this.$el.html(this.template);
  },
  initialize: function() {
    this.render();
  }
});