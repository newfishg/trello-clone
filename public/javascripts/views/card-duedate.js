var CardDueDateView = Backbone.View.extend({
  template: App.templates['card-due-date'],
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('.card-due-date').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});