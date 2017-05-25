var SearchView = Backbone.View.extend({
  el: '.search-container',
  template: App.templates.search,

  events: {
    'click': 'clicked',
  },

  clicked: function(e) {
    if ($(e.target).prop('tagName') === 'A') {
      var link = $(e.target).attr('href');
      router.navigate(link, { trigger: true });
    }

    return false
  },

  closeSearch: function(e) {
    if ($(e.target).attr('class')) {
      if ($(e.target).attr('class').includes('search-card-input') || $(e.target).attr('class').includes('search-modal')) {
        
      } else {
        this.$el.hide();
      }
    } else {
      this.$el.hide();
    }
    
    // this.$el.hide();
  },

  searchCard: function(query) {
    var matchCardArray = [];

    if (query.length <= 1) {
      this.$el.html('<p>More than 2 characters to start the search</p>');
      return;
    }

    this.collection.each(function(card) {

      var title = card.get('title') || '';
      var des = card.get('description') || '';

      if (title.startsWith(query) || des.startsWith(query)) {
        matchCardArray.push(card.get('id'));
      }
    });

    matchCardArray = _.uniq(matchCardArray);
    this.render(matchCardArray);
  },

  render: function(matchCardArray) {
    this.$el.html(this.template({ cards: matchCardArray }));
  },

  initialize: function() {
    $('body').on('click', this.closeSearch.bind(this));
  }
});