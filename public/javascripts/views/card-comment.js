var CommentView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates['card-comment'],
  events: {
    'click .comment-delete': 'deleteComment',
    'click .comment-edit': 'renderEditComposer',
    'click .close-composer-btn': 'hideEditComposer',
    'click .comment-update-btn': 'updateComment'
  },

  updateComment: function(e) {
    e.preventDefault();
    var newContent = this.$('textarea').val();
    
    this.model.save({ content: newContent, edited: true});
    this.hideEditComposer();
    // App.trigger('reloadModalCommentsSection');
  },

  hideEditComposer: function() {
    this.$('.comment-edit-controls').hide();
    this.$('.comment-container').show();
  },

  renderEditComposer: function() {
    this.showEditComposer();
    this.$('textarea').val(this.model.get('content'));
  },


  showEditComposer: function() {
    this.$('.comment-edit-controls').show();
    this.$('.comment-container').hide();
  },

  deleteComment: function(e) {
    e.preventDefault();
    this.model.destroy();
    App.trigger('reloadModalCommentsSection');
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
    this.listenTo(this.model, 'change', this.render);
  }
});