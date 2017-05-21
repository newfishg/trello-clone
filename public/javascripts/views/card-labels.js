var CardLabelsView = Backbone.View.extend({
  el: '.card-labels',
  
  template: App.templates['card-labels'],
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});