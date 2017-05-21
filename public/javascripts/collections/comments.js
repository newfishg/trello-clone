var Comments = Backbone.Collection.extend({
  url: '/comments',
  copyCardComments: function(oldCardID) {
    var self = this;
    var newCreatedCardID = _.max(App.cards.pluck('id'));

    this.where({ cardId: oldCardID }).forEach(function(model) {
      var newComment = {};
      newComment.content = model.get('content');
      newComment.time = model.get('time');
      newComment.cardId = newCreatedCardID;
      self.create(newComment, { wait: true });
    })
  },

  deleteCardComments: function(cardID) {
    var cardComments = this.where({ cardId: cardID });
    cardComments.forEach(function(model) {
      model.destroy({ wait: true });
    });
  }
});