var NewlistView = Backbone.View.extend({
  attributes: {
    class: 'new-list'
  },
  template: App.templates.newlist,
  render: function() {
    this.$el.html(this.template);
  },
  initialize: function() {
    this.render();
  }
});