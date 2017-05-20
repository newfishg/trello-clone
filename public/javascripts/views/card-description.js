var CardDescriptionView = Backbone.View.extend({
  attributes: {
    class: 'card-desrciption-wrapper'
  },
  events: {
    'click .open-description-composer': 'openDescriptionComposer',
    'click .close-composer-btn': 'closeDescriptionComposer',
    'click .description-submit-btn': 'saveDescription',
    'click .edit-card-description': 'editDescription'
  },

  editDescription: function() {
    var cardDescription = this.model.get('description');

    this.$('.description-content').toggle();
    this.openDescriptionComposer();
    this.$('textarea').val(cardDescription);
  },

  saveDescription: function(e) {
    e.preventDefault();

    var cardDescription = this.$('textarea').val();
    this.model.save({ description: cardDescription });
    App.trigger('reloadModalDescriptionSection');
  },

  closeDescriptionComposer: function() {
    this.$('.open-description-composer').show();
    this.$('.description-submit-controls').hide();
    this.$('.description-content').toggle();
    this.$('textarea').val('');
  },

  openDescriptionComposer: function(e) {
    if (e) {
      $(e.target).hide();
    }
    
    this.$('.description-submit-controls').show();
  },

  template: App.templates['card-description'],
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $('.card-description').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});