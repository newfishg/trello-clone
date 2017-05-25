var IndexView = Backbone.View.extend({
  el: 'body',
  template: App.templates.index,

  events: {
    'click #modal-overlay': 'closeModalByOverlay',
    'click .open-notification-btn': 'showNotifications',
    'click .search-card-input': 'showSearchModal',
    'click .close-search-modal': 'closeSearchModal',
    'keyup input[name="search"]': 'searchCard',
  },

  searchCard: function(e) {
    var query = $(e.target).val();

    App.trigger('startSearch', query);
  },

  closeSearchModal: function(e) {
    this.$('.search-container').hide();
    $(e.target).closest('div').find('input').removeClass('search-input-extend');
    $(e.target).closest('div').find('input').val('');
    this.$('.close-search-modal').hide();
    this.$('.search-container').empty();
  },

  showSearchModal: function(e) {
    $(e.target).addClass('search-input-extend');
    this.$('.search-container').show();
    this.$('.close-search-modal').show();
  },

  showNotifications: function() {
    this.$('.subscribe-activity').toggle();
      
    if ($('.header-notification').hasClass('bell-active')) {
      $('.header-notification').removeClass('bell-active');
    }

    // prevent bubble to body click event
    return false;
  },

  closeModalByOverlay: function(e) {
    if (e.target === e.currentTarget) {
      this.closeModal();
    }
  },

  closeModal: function(e) {
    App.trigger('renderIndexView');
    router.navigate('/');
  },
  
  render: function() {
    this.$el.html(this.template);
  },
  initialize: function() {
    this.render();
  }
});