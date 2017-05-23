var ListView = Backbone.View.extend({
  template: App.templates.list,
  attributes: {
    class: 'list-card'
  },
  events: {
    'click .card-composer': 'clicked',
    'click .open-card-composer': 'openCardComposer',
    'click .exit-card-composer': 'closeCardComposer',
    'submit': 'createNewCard',
  },

  clicked: function() {
    // when click in composer, prevent bubble to body
    return false;
  },

  createNewCard: function(e) {
    e.preventDefault();
    var $f = this.$('.new-card-form');

    // add sort number here
    if (this.notEmptyCardName()) {
      $.ajax({
        url: $f.attr('action'),
        type: $f.attr('method'),
        data: $f.serialize(),
        success: function(json) {
          App.trigger('addNewCard', json);
        }
      });
    }

    this.cardComposerReset();
  },

  notEmptyCardName: function($form) {
    return this.$('.new-card-form').find('textarea').val() !== ''
  },
  cardComposerReset: function() {
    this.$('.card-name-input').val('');
    this.$('.card-name-input').focus();
  },
  openCardComposer: function(e) {
    e.preventDefault();
    $(e.target).hide();
    $(e.target).closest('div').find('.card-composer').show();

    return false
  },
  closeCardComposer: function() {
    this.$('.open-card-composer').show(0)
    this.$('.card-composer').hide();
  },

  cardSortable: function() {
    var self = this;

    this.$('.card-container').sortable({
      connectWith: '.card-container',
      dropOnEmpty: true,
      placeholder: 'card-placeholder',
      tolerance: "pointer",
      helper: 'clone',
      zIndex: 9999,
      start: function(e, ui) {
        ui.placeholder.width(ui.helper.width());
        ui.placeholder.height(ui.helper.height());
        ui.helper.addClass('helper-tilt');
      },
      update: function(e, ui) {
        var listId = Number(ui.item.parents('div').attr('data-list-id'));
        var cardPositionArray = self.$('.card-container').sortable('toArray', { attribute: 'data-card-id' });

        if (ui.sender) {
          var cardId = Number(ui.item.attr('data-card-id'));
          App.trigger('updateListID', cardId, listId);
        }

        App.trigger('updateCardsPosition', cardPositionArray);
      }
    });
  },
  render: function() {
    var id = this.model.get('id');
    this.$el.attr('data-list-id', id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$('.list-id-identifer').val(id);
  },
  initialize: function() {
    $('body').on('click', this.closeCardComposer.bind(this));
    this.render();
    this.cardSortable();
    this.model.view = this;
  }
});