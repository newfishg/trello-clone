var Cards = Backbone.Collection.extend({
  url: '/cards',
  model: Card,
  comparator: 'position',

  filterByListID: function(listID) {
    return this.where({ listId: listID });
  },

  inListCardMove: function(listID, currentPosition, newPosition) {
    var cardsArray = this.filterByListID(listID);
    var lowerLimit = _.min([newPosition, currentPosition]);
    var upperLimit = _.max([newPosition, currentPosition]);
    var offset = (currentPosition < newPosition ? -1 : 1);

    _.filter(cardsArray, function(cardModel) {
      var position = cardModel.get('position');
      return (lowerLimit < position && upperLimit > position) || position === newPosition
    })
    .forEach(function(model) {
      var originalPosition = model.get('position');
      model.save({ position: originalPosition + offset }, { wait: true })
    });
  },

  listUpdateCardsPosition: function(listID, targetPosition, offset, insert) {
    var cardsArray = this.filterByListID(listID);
    
    _.filter(cardsArray, function(cardModel) {
      var position = cardModel.get('position');
      if (insert) {
        return position >= targetPosition
      } else {
        return position > targetPosition
      }
    })
    .forEach(function(model) {
      var originalPosition = model.get('position');
      model.save({ position: originalPosition + offset}, { wait: true })
    });
  },

  updateListID: function(cardId, newListId) {
    this.get(cardId).save({ listId: newListId });
  },

  updateCardsPosition: function(positionArray) {
    var firstCardId = positionArray[0];
    var listID;
    var matchListCards;

    if (!firstCardId) {
      return
    }

    listID = Number($('[data-card-id='+ firstCardId +']').parents('div.list-card').attr('data-list-id'));
    matchListCards = this.where({ listId: listID });

    matchListCards.forEach(function(cardModel) {
      newPosition = positionArray.indexOf(String(cardModel.id)) + 1;
      cardModel.save({ position: newPosition });
    });
  },

  filterByListId: function (listId) {
    return filtered = this.filter(function (card) {
      return card.get("listId") === listId;
    });
  }
});