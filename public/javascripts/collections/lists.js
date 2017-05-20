var Lists = Backbone.Collection.extend({
  url: '/lists',
  model: List,
  comparator: 'position',

  updateListsPosition: function(positionArray) {
    // var positionArray = this.$el.sortable('toArray', { attribute: 'data-list-id' });
    var newPosition;

    this.each(function(list) {
      newPosition = positionArray.indexOf(String(list.id));
      list.save({ position: newPosition });
    });
  },
})