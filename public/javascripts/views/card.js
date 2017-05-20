var CardView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.card,

  render: function() {
    var id = this.model.get('id');
    this.$el.attr('data-card-id', id);
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
    this.listenTo(this.model, 'change', this.render);
  }
});