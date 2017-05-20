var CardCommentsView = Backbone.View.extend({
  template: App.templates['card-comments'],
  el: '.comments-container',

  render: function() {
    var self = this;
    this.$el.empty();
    var cardCommentsCollection = this.collection.where({cardId: this.cardID});
    cardCommentsCollection.forEach(function(model) {
      self.renderComment(model);
    });
  },

  renderComment: function(comment) {
    var commentView = new CommentView({
      model: comment
    });
    this.$el.append(commentView.el);
  },

  initialize: function(options) {
    this.cardID = options.cardID;
    this.render();
  }
});