header
    div(class="header-search")
      input(type='text')
    
    a(class="header-logo" href="/")

    div(class="header-notification")
      span(class="icon-bell")

  main
    div(class="subscribe-activity")
      h3 Notifications
      a(href="#" class='close-modal')
      hr(class="clear")
      ul(class="")
        li
          | Comment has been updated
          p(class="smaller") 5/9/2017 at 11:02 PM
        li
          | Comment has been updated
          p(class="smaller") 5/9/2017 at 11:02 PM
      //- p No notifications
    div(class="board-header")
      a(class="board-header-btn")
        span(class="board-header-btn-text board-header-btn-name") Ruby on rails
      div(class="board-header-btns")
        a(class="board-header-btn board-header-star" href="#")
          span(class="board-header-btn icon-star")
        a(class="board-header-btn" href="#")
          span(class="board-header-btn icon-lock")
          span(class="board-header-btn-text") Private
    div(class="lists-container")
      div(class="list-card")
        h2 List 1
        ul
          li(class="")
            a
              span(class="edit")  
              div(class="list-card-labels")
                span(class="label-red")
              h3(class="list-card-title") Card1
              div(class="list-card-badges")
      div(class="list-card")
        h2 List 2
        ul
          li
            a
              span(class="edit")  
              div(class="list-card-labels")
                span(class="label-red")
              h3(class="list-card-title") Card1
              div(class="list-card-badges")
        a(href="#" class="open-card-composer") Add a card...
      div(class="list-card")
        h2 List 3
        ul
          li
            a
              span(class="edit")
              div(class="list-card-labels")
                span(class="label-red")
              h3(class="list-card-title") Card1
          li
            a
              span(class="edit")
              div(class="list-card-labels")
                span(class="card-label label-red")
                span(class="card-label label-green")
                span(class="card-label label-blue")
                span(class="card-label label-orange")
                span(class="card-label label-violet")
                span(class="card-label label-yellow")  
                span(class="card-label label-aqua")
              h3(class="list-card-title") Card2
              div(class="list-card-badges")
                div(class="card-badge badge-subscribe inline-block")
                div(class="card-badge badge-future-dueDate inline-block")
                  span(class="inline-block smaller") May 9
                div(class="card-badge badge-description inline-block")
                div(class="card-badge badge-comments inline-block")
                  span(class="inline-block smaller") 2
      div(class="list-card")
        h2 List 3
        ul
          li
            a
              span(class="edit")  
              div(class="list-card-labels")
                span(class="label-red")
              h3(class="list-card-title") Card1
          li
            a
              span(class="edit")  
              div(class="list-card-labels")
                span(class="card-label label-red")
                span(class="card-label label-green")
                span(class="card-label label-blue")
                span(class="card-label label-orange")
                span(class="card-label label-violet")
                span(class="card-label label-yellow")  
                span(class="card-label label-aqua")
              h3(class="list-card-title") Card2
              div(class="list-card-badges")
                div(class="card-badge subscribe inline-block")
                  span(class="icon-subscribe")
                div(class="card-badge future-dueDate inline-block")
                  span(class="icon-future-dueDate inline-block")
                  span(class="future-dueDate inline-block smaller") May 9
                div(class="card-badge description inline-block")
                  span(class="icon-description")
                div(class="card-badge comments inline-block")
                  span(class="icon-comment")
                  span(class="comments-count inline-block smaller") 2
        div(class="card-composer")
          form
            textarea
            input(type="submit" value="Add" class="submit-button")
            a(href="#" class="close-composer")
        a(href="#" class="open-card-composer") Add a card...
      div(class="new-list")
        a(href="#") Add a list...

  div(class="modal" id="modal-background")
    div(class="modal" id="edit-card-modal")
      a(href="#" class="close-modal")
      div(class="card-main inline-block")
        div(class="card-header")
          h2 Card1
          p in list 
            a(class="move-card" href="#") List 3
        div(class="card-main-content")
          div(class="card-labels")
            h3 Labels
            div(class="card-labels-container")
              span(class="card-label label-red") Dimethyamino
              span(class="card-label label-green")
              span(class="card-label label-aqua")
              span(class="card-label label-yellow")
              span(class="card-label label-violet")
              span(class="card-label-add")
          div(class="card-due-date")
            h3 Due Date
            span(class="edit-card-due inline-block") May 17 at 12:00 PM
          div(class="card-description")
            h3(class="inline-block") Description
            span(class="edit-card-description") Edit
            p Static description
        div(class="card-add-comment")
          h2 Add Comment
          form(action="post" url="#")
            textarea
            input(type="submit" value="Send" class="submit-button")
            p
        div(class="card-activities")
          h2 Activities
          ul
            li
              p(class="comment-content") Another comment
              p(class="smaller")
                | 15 hours ago -
                a(class="comment-edit")  Edit
                |  -
                a(class="comment-delete")  Delete
            li
              p(class="comment-content") Another comment
              p(class="smaller")
                | 15 hours ago -
                a(class="comment-edit")  Edit
                |  -
                a(class="comment-delete")  Delete
            li
              p(class="comment-content") Another comment
              p(class="smaller")
                | 15 hours ago -
                a(class="comment-edit")  Edit
                |  -
                a(class="comment-delete")  Delete
      div(class="card-aside inline-block")
        div(class="card-aside-add")
          h2 Add
          a(class="card-add-label card-aside-btn") Labels
          a(class="card-add-due card-aside-btn") Due Date
        div(class="card-aside-actions")
          h2 Actions
          a(class="card-move card-aside-btn") Move
          a(class="card-copy card-aside-btn") Copy
          a(class="card-subscribe card-aside-btn") Subscribe
          a(class="card-archive card-aside-btn") Archive
      div(class="pop-window")


var App = {
  templates: JST,
  indexView: function() {
    if (this.cardDetailsView) {
      this.cardDetailsView.remove();
      this.cardDetailsView.close();
    }
    this.renderBoard();
  },
  renderBoard: function() {
    if (this.boardView) {
      this.boardView.remove();
    }

    this.boardView = new BoardView({
      collection: this.lists,
    });

    this.boardView.render();
    $('main').html(this.boardView.el);
  },
  cardModalView: function(id) {
    id = Number(id.split('-')[0]);

    if (!this.boardView) {
      this.indexView();
    }

    this.cardDetailsView = new CardDetailsView({
      model: App.cards.get(id),
    });

    $('.card-details-modal').html(this.cardDetailsView.el);
    $('.modal-overlay').css('display', 'flex');
  },
  closeModal: function() {
    $('.modal-overlay').hide();
    router.navigate('', { trigger: true });
  },
  closeModalByOverlay: function(e) {
    if (e.target === e.currentTarget) {
      this.closeModal();
    }
  },
  displayArchiveMenu: function(offset, height) {
    this.archiveView = new ArchivePopoverView({
      offset: offset,
      height: height,
      lists: App.lists.where({ archived: true }),
      cards: App.cards.where({ archived: true }),
    });
  },
  displayListMenu: function(model, offset, height) {
    this.listActionsView = new ListPopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displayLabelsMenu: function(model, offset, height) {
    this.labelsView = new LabelsPopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displayDueDateMenu: function(model, offset, height) {
    this.dueDateView = new DueDatePopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displayMoveMenu: function(model, offset, height) {
    this.moveCardView = new MovePopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displayCopyMenu: function(model, offset, height) {
    this.copyCardView = new CopyPopoverView({
      model: model,
      offset: offset,
      height: height,
    });
  },
  displaySearch: function(offset, height) {
    $('.popover').addClass('search-modal');
    this.searchView = new SearchView({
      model: this.searchResults,
      offset: offset,
      height: height,
    });
  },
  closeSearch: function() {
    this.headerView.resetSearchField();
    $('.popover').removeClass('search-modal').hide();

    if (this.searchView) {
      this.searchView.remove();
    }
  },
  search: function(query) {
    this.searchResults.set('query', query);
  },
  displayNotifications: function(offset, height) {
    $('.popover').addClass('notification-modal');
    this.notificationsView = new NotificationsView({
      collection: this.notifications,
      offset: offset,
      height: height,
    });

    this.headerView.notificationsAlert(false);
  },
  getNotifications: function() {
    var results = [];
    var self = this;
    var subscribedCards = this.cards.where({
      subscribed: true,
      archived: false,
    });

    subscribedCards.forEach(function(card) {
      results.push(self.activityLog.filter(function(activity) {
        return card.id === activity.get('cardId') &&
          new Date(activity.get('createdAt')) > new Date(card.get('subscribedAt'));
      }));
    });

    return _.flatten(results);
  },
  checkNotifications: function() {
    if (this.notifications.where({ viewed: false })) {
      this.headerView.notificationsAlert(true);
    }
  },
  updateActivity: function(model, value, options) {
    this.activityLog.addToLog(model, value, options, this.cards);
  },
  updateNotifications: function(activity) {
    if (App.cards.get(activity.get('cardId')).get('subscribed')) {
      this.notifications.addNew(activity.get('id'));
    }
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('listModified', this.renderBoard);
    this.on('listMoved', this.lists.updatePositions.bind(this.lists));
    this.on('unarchiveList', this.lists.unarchive.bind(this.lists));
    this.on('cardsModified', this.renderBoard);
    this.on('cardMoved', this.cards.updatePositions.bind(this.cards));
    this.on('cardCopied', this.cards.copyCard.bind(this.cards));
    this.on('changeCardList', this.cards.updateListId.bind(this.cards));
    this.on('addNewCard', this.cards.addCard.bind(this.cards));
    this.on('viewArchive', this.displayArchiveMenu);
    this.on('viewListActions', this.displayListMenu);
    this.on('viewLabels', this.displayLabelsMenu);
    this.on('viewDueDate', this.displayDueDateMenu);
    this.on('viewMoveCard', this.displayMoveMenu);
    this.on('viewCopyCard', this.displayCopyMenu);
    this.on('closeModal', this.closeModal);
    this.on('closeSearch', this.closeSearch);
    this.on('viewNotifications', this.displayNotifications);
    this.on('newComment', this.comments.addComment.bind(this.comments));
    this.on('openSearch', this.displaySearch);
    this.on('performSearch', this.search);
    this.listenTo(this.lists, 'add', this.renderBoard);
    this.listenTo(this.cards, 'change:dueDate change:listId change:archived', 
      this.updateActivity);
    this.listenTo(this.cards, 'change:labels change:subscribed change:description change:dueDate change:archived', 
      this.renderBoard);
    this.listenTo(this.comments, 'add', this.renderBoard);
    this.listenTo(this.comments, 'add', this.updateActivity);
    this.listenTo(this.activityLog, 'add', this.updateNotifications);
    this.listenTo(this.notifications, 'add', this.checkNotifications)
    $('body').on('click', '.modal-overlay', this.closeModalByOverlay.bind(this));
  },
  init: function() {
    this.searchResults = new Filter({ collection: this.cards.where({ archived: false }) });
    this.headerView = new HeaderView();
    this.bindEvents();
  }
};

Handlebars.registerHelper('formatDateTime', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.format('MMM D') + ' at ' + dateObj.format('h:mm A');
});

Handlebars.registerHelper('formatShortDueDate', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.format('MMM D');
});

Handlebars.registerHelper('formatActivityTime', function(dateTime) {
  var dateObj = moment(dateTime);
  return dateObj.fromNow();
});

Handlebars.registerHelper('formatCardUrl', function(id, title) {
  var formattedTitle = title.toLowerCase().slice(0, 130).replace(/[^a-z0-9]+/g, '-');
  if (formattedTitle.slice(-1) === '-') {
    formattedTitle = formattedTitle.slice(0, formattedTitle.length - 1);
  }

  return id + '-' + formattedTitle;
});





