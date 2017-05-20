var CardsView = Backbone.View.extend({
  appendNewCard: function() {
    // for create new card
  },

  renderCard: function(card) {
    var cardView = new CardView({
      model: card
    });

    // find corresponding list ul and append it
    var $cardContainer = this.findMatchCardContainer(cardView);
    $cardContainer.append(cardView.el);

  },

  findMatchCardContainer: function(cardView) {
    var listID = cardView.model.get('listId');
    return $('[data-list-id="' + listID + '"]').find('ul');
  },

  partialrender: function(listID) {
    var self = this;
    var $cardContainer = $('[data-list-id='+ listID + '] .card-container');

    this.collection.sort();
    var matchCardCollection = this.collection.where({ listId: listID });

    $cardContainer.empty();

    matchCardCollection.forEach(function(model) {
      self.renderCard(model);
    });
  },

  render: function() {
    this.collection.each(this.renderCard.bind(this));
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.renderCard);
  }

});