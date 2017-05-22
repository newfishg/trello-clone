var SearchView = Backbone.View.extend({
  el: '.search-container',
  template: App.templates.search,

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

  }
});