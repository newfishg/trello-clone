var CardEditView = Backbone.View.extend({
  attributes: {
    id: 'edit-card-modal',
    class: 'modal'
  },
  template: App.templates['edit-card-modal'],

  events: {
    'click .card-add-due': 'loadDatePickerView',
    'click .card-add-label, .card-label': 'loadLabelsPickerView',
    'click #toggle-due-date': 'toggleDueCompleted',
    'click .pop-window-overlay': 'hidePopWindow',
    'submit .comment-composer': 'createComment',
    'click .card-copy': 'loadCardCopyView',
    'click .card-move': 'loadCardMoveView',
    'click .card-subscribe': 'cardSubsribe',
    'click .card-archive': 'cardArchive',
    'click .open-title-input': 'openTitleComposer',
    'blur .card-title-input': 'updateCardTitle'
  },

  updateCardTitle: function(e) {
    var newTitle = $(e.target).val();
    $(e.target).hide();
    this.$('.open-title-input').show();
    if (this.model.get('title') !== newTitle) {
      this.model.save({ title: newTitle}, {
        success: function() {
          this.$('.open-title-input').text(newTitle);
        }
      });
    }
  },

  openTitleComposer: function(e) {
    var title = $(e.target).text();
    $(e.target).hide();
    this.$('.card-title-input').show();
    this.$('.card-title-input').val(title);
    this.$('.card-title-input').focus();
  },

  cardArchive: function(e) {
    var positionObject = $(e.target).position();
    this.showPopWindow(positionObject);
    
    this.archiveView = new ArchivePopView({ 
      model: this.model
    });
  },

  cardSubsribe: function() {
    var newSubscribeStatus = this.model.get('subscribe') === true ? false : true;

    this.$('.card-subscribe-check').toggleClass('subscribe-active');
    this.$('.subscribe-icon-container').toggleClass('subscribe-active');

    this.model.save({ subscribe: newSubscribeStatus }, { wait: true })
  },

  loadCardMoveView(e) {
    var positionObject = $(e.target).position();
    this.showPopWindow(positionObject);

    this.movePopView = new MovePopView({ 
      model: this.model,
    });
  },

  loadCardCopyView: function(e) {
    var positionObject = $(e.target).position();
    this.showPopWindow(positionObject);

    this.copyPopView = new CopyPopView({ 
      model: this.model,
    });
  },


  refreshComments: function() {
    var cardID = this.model.get('id');

    this.$('.comments-container').html('');
    this.commentsSectionView = new CardCommentsView({ collection: App.comments, cardID: this.model.get('id') });
    App.trigger('updateCardComment', cardID);
  },

  createComment: function(e) {
    e.preventDefault();

    var cardID = this.model.get('id')
    var commentData = {
      content: this.$('.comment-content').val(),
      time: new Date(),
      cardId: cardID,
    }

    App.trigger('createComment', commentData);
    App.trigger('updateCardComment', cardID);
    this.commentsSectionView = new CardCommentsView({ collection: App.comments, cardID: this.model.get('id') });
    this.$('.comment-content').val('');

    if (this.model.isSubscribe()) {
      var activityLog = {
        type: 'addComment',
        cardID: this.model.get('id')
      };
      App.trigger('updateNotification', activityLog);
    }
  },


  showPopWindow: function(position) {
    this.$popWindow.show();
    this.$popOverlay.show();

    if (position) {
      this.$popWindow.css('top', position.top + 30);
      this.$popWindow.css('left', position.left);
    }
    
  },


  hidePopWindow: function() {
    this.$popWindow.hide();
    this.$popOverlay.hide();
  },

  refreshLabels: function() {
    this.labelsSectionView.render();
  },

  refreshDescription: function() {
    this.descriptionSectionView.remove();
    // If fire descriptionSectionView.render(), the old event will not apply to the new re-render template
    // Because View.$el.html() will empty all event in the view
    this.descriptionSectionView = new CardDescriptionView({ model: this.model });
  },

  toggleDueCompleted: function() {
    $('div.card-due-date').find('span').toggleClass('is-completed');
    if (this.model.get('completed')) {
      this.model.save({ completed: false });
    } else {
      this.model.save({ completed: true });
    }
  },

  refreshDueDate: function() {
    this.dueDateSectionView.render();
  },

  reloadLabels: function() {
    this.labelsPopView.remove();
    this.hidePopWindow();
    this.labelsPopView = new LabelsPopView({ 
      model: this.model
    });
    this.$popWindow.html(this.labelsPopView.render().el);
    this.showPopWindow();
    this.labelsPopView.activeCardLabels();
  },

  loadLabelsPickerView: function(e) {
    if (e) {
      var positionObject = $(e.target).position();
      this.showPopWindow(positionObject);
    } else {
      this.showPopWindow();
    }

    this.labelsPopView = new LabelsPopView({ 
      model: this.model
    });

    this.$popWindow.html(this.labelsPopView.render().el);
    this.labelsPopView.activeCardLabels();
  },

  loadDatePickerView: function(e) {
    var positionObject = $(e.target).position();
    this.showPopWindow(positionObject);

    this.dueDatePopView = new DueDatePopView({ model: this.model });

    this.$popWindow.html(this.dueDatePopView.render().el);
    this.dueDatePopView.loadDatePicker();
    this.dueDatePopView.loadModelDateData();
  },

  render: function() {
    this.cardId = this.model.get('id');
    this.$el.html(this.template(this.model.toJSON()));

    $('.edit-modal-container').html(this.$el);
  },

  initialize: function() {
    this.render();
    this.$popWindow = this.$('.pop-window');
    this.$popOverlay = this.$('.pop-window-overlay');
    this.dueDateSectionView = new CardDueDateView({ model: this.model });
    this.descriptionSectionView = new CardDescriptionView({ model: this.model });
    this.labelsSectionView = new CardLabelsView({ model: this.model });
    this.commentsSectionView = new CardCommentsView({ collection: App.comments, cardID: this.model.get('id') });
  }
});