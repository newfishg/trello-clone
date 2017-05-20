var Card = Backbone.Model.extend({
  urlRoot : '/cards',
  // updateCardData: function(dataObject) {
  //   this.save(dataObject);
  // }
  isSubscribe: function() {
    return this.get('subscribe') === true;
  }
});