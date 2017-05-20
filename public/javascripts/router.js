var router = new (Backbone.Router.extend({
  routes: {
    'cards/:id': 'renderCardEditModal',
  },

  renderCardEditModal: function(cardId) {
    App.trigger('renderEditModal', cardId);
  },

  index: function() {
    App.trigger('renderIndexView');
  },

  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  }

}));

Backbone.history.start({
  pushState: true
});

$(document).on('click', "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
});