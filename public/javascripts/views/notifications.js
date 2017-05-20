var NotificationsView = Backbone.View.extend({
  el: '.subscribe-activity',
  template: App.templates.notifications,

  events: {
    'click .close-modal': 'closeWindow'
  },

  closeWindow: function() {
    this.$el.hide();
  },

  activateBell: function() {
    $('.header-notification').addClass('bell-active');
  }, 

  appendNotification: function(activityLog) {
    var notificationView = new NotificationView(activityLog);

    this.$('.notifications-container').append(notificationView.render().el);

    this.activateBell();
  },


  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.render();
  }
});