var App = {
  templates: JST,
  renderEditModal: function(cardId) {
    var cardModel = this.cards.get(cardId)

    if (this.editCardView) {
      this.editCardView.remove();
    }

    this.editCardView = new CardEditView({ model: cardModel });
    $('.modal').show();
  },

  indexView: function() {
    if (this.editCardView) {
      this.editCardView.remove();
      $('.modal').hide();
    }
  },

  updateNewCard: function(card) {
    App.cards.add(card);
  },
  
  updateNewList: function(list) {
    App.lists.add(list);
  },

  updateDueDateSection: function() {
    this.editCardView.refreshDueDate();
  },

  updateDescriptionSection: function() {
    this.editCardView.refreshDescription();
  },

  updateLabelsSection: function() {
    this.editCardView.refreshLabels();
  },

  updateLabelPopPage: function() {
    this.editCardView.loadLabelsPickerView();
  },

  addNewLabel: function(labelData, cardID) {
    var self = this;
    App.labels.create(labelData, {
      success: function() {
        self.updateLabelsSection();
        self.addNewLabelToCard(cardID);
      }
    });
  },

  reRenderCardView: function(cardID) {
    this.cards.get(cardID).view.render();
  },

  addNewLabelToCard: function(cardID) {
    var self = this;
    var cardModel = this.cards.get(cardID);
    var labelsArray = cardModel.get('labels') || [];
    var latestLabelID = _.max(this.labels.pluck('id'));

    labelsArray.push(latestLabelID);
    cardModel.save({ labels: labelsArray }, {
      success: function() {
        self.updateLabelPopPage();
        self.reRenderCardView(cardID);
        self.updateLabelsSection();
      }
    });
  },

  closeLabelPop: function() {
    this.editCardView.hidePopWindow();
  },

  openLabelPop: function() {
    this.editCardView.showPopWindow();
  },

  addComment: function(commentData) {
    this.comments.create(commentData);
  },

  addCommentCountToCard: function(cardId) {
    var commentsCount = App.comments.where({ cardId: cardId }).length;
    this.cards.get(cardId).save({ comments: commentsCount });
  },

  updateCommentsSection: function() {
    this.editCardView.refreshComments();
  },

  updateCardsView: function() {
    this.cardsView.render();
  },


  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('addNewList', this.updateNewList.bind(this));
    this.on('addNewCard', this.updateNewCard.bind(this));
    this.on('updateListsPosition', this.lists.updateListsPosition.bind(this.lists));
    this.on('updateListID', this.cards.updateListID.bind(this.cards));
    this.on('updateCardsPosition', this.cards.updateCardsPosition.bind(this.cards));
    this.on('renderEditModal', this.renderEditModal.bind(this));
    this.on('renderIndexView', this.indexView.bind(this));
    this.on('reloadModalDueDateSection', this.updateDueDateSection.bind(this));
    this.on('reloadModalDescriptionSection', this.updateDescriptionSection.bind(this));
    this.on('reloadModalLabelsSection', this.updateLabelsSection.bind(this));

    this.on('updateLabelPopWindow', this.updateLabelPopPage.bind(this));
    this.on('labelsEditRefreshCardsView', this.cards.updateCardViewFromLabelsEdit.bind(this.cards));
    this.on('createLabelRefreshModalAndPopAndAddLabelToCard', this.addNewLabel.bind(this));
    this.on('addLabelToCard', this.addNewLabelToCard.bind(this));
    this.on('removeLabelFromCard', this.cards.removeLabelFromCard.bind(this.cards));

    this.on('closeLabelPop', this.closeLabelPop.bind(this));
    this.on('openLabelPop', this.openLabelPop.bind(this));
    this.on('createComment', this.addComment.bind(this));
    this.on('updateCardComment', this.addCommentCountToCard.bind(this));
    this.on('reloadModalCommentsSection', this.updateCommentsSection.bind(this));
    this.on('refreshCardsView', this.updateCardsView.bind(this));
    this.on('inListCardMove', this.cards.inListCardMove.bind(this.cards));
    this.on('originalListPositionUpdate', this.cards.listUpdateCardsPosition.bind(this.cards));
    this.on('newListPositionUpdate', this.cards.listUpdateCardsPosition.bind(this.cards));
    this.on('listPartialRender', this.cardsView.partialrender.bind(this.cardsView));
    this.on('copyCardComments', this.comments.copyCardComments.bind(this.comments));

    this.on('updateNotification', this.notificationsView.appendNotification.bind(this.notificationsView));
    this.on('deleteCardComments', this.comments.deleteCardComments.bind(this.comments));

    this.on('startSearch', this.searchView.searchCard.bind(this.searchView));
  },
  init: function(lists, cards, labels, comments) {
    this.lists = new Lists(lists);
    this.cards = new Cards(cards);
    this.labels = new Labels(labels);
    this.comments = new Comments(comments);
    this.indexPage = new IndexView();
    this.listsView = new ListsView({ collection: this.lists });
    this.cardsView = new CardsView({ collection: this.cards });
    this.notificationsView = new NotificationsView();
    this.searchView = new SearchView({ collection: this.cards });
    this.bindEvents();
  }  
};

Handlebars.registerHelper('find_card_list_name', function(cardId) {
  cardId = String(cardId);
  var listName = $('[data-card-id=' + cardId + ']').parents('div.list-card').find('h2').text();

  return listName;
});

Handlebars.registerHelper('formatDate', function(date) {
  return moment(date).format('MMM D')
});

Handlebars.registerHelper('formatTime', function(date) {
  return moment(date).format('h:mm a')
});


Handlebars.registerHelper('labelConverter', function(labelID) {
  if (!labelID) {
    labelID = App.labels.length;
  }
  return App.labels.findWhere({ id: labelID }).toJSON().class
});

Handlebars.registerHelper('relativeTime', function(time) {
  return moment(time).fromNow();
});

Handlebars.registerHelper('isCurrentPosition', function(position, currentPosition, listID, currentListID) {
  if (position === currentPosition && listID === currentListID) {
    return position.toString() + ' (current)';
  } else {
    return position.toString();
  }
});

Handlebars.registerHelper("haveLabelsOrComments", function(labels, comments, block) {
  if (labels || comments) { return block.fn(this); }
});


Handlebars.registerHelper("labelsArrayToCount", function(labels) {
  return labels.length
});

Handlebars.registerHelper("subsribeStatusLoad", function(isSubscribe) {
  if (isSubscribe) {
    return 'subscribe-active';
  }
});

Handlebars.registerHelper("idToHref", function(id) {
  return '/cards/' + id.toString();
});

Handlebars.registerHelper("cardIDtoName", function(id) {
  return App.cards.findWhere({id: id}).toJSON().title;
});


Handlebars.registerHelper("listIDtoName", function(id) {
  return App.lists.findWhere({id: id}).toJSON().title;
});

Handlebars.registerHelper("cardIDtoListName", function(id) {
  var listID = App.cards.findWhere({ id: id }).get('listId')
  return App.lists.findWhere({ id: listID }).get('title');
});



