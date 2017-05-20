var NotificationView = Backbone.View.extend({
  tagName: 'li',
  // template: App.templates.notification,

  render: function() {
    var activityType = this.activityLog.type;

    if (activityType === 'moveCard') {
      this.template = App.templates['notification-move'];
    } else if (activityType === 'copyCard') {
      this.template = App.templates['notification-copy'];
    } else if (activityType === 'addComment') {
      this.template = App.templates['notification-add-comment'];
    } else if (activityType === 'archive') {
      this.template = App.templates['notification-archive'];
    } else if (activityType === 'changeDue') {
      this.template = App.templates['notification-change-due'];
    } else if (activityType === 'addDue') {
      this.template = App.templates['notification-add-due'];
    } else {
      this.template = App.templates['notification-unknown'];
    }

    this.activityLog.time = new Date();
    this.$el.html(this.template(this.activityLog));

    return this;
  },

  initialize: function(activityLog) {
    this.activityLog = activityLog;
  }
});