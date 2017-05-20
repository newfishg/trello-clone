var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/cards.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },

  getLastID: function() {
    return this.__readFile().last_id;
  },

  get: function() {
    return this.__readFile().data;
  },

  update: function(data) {
    data.id = this.getLastID();
    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      data: data
    }), 'utf8');
  },

  set: function(data) {
    data.id = this.getLastID() + 1;

    fs.writeFileSync(file_path, JSON.stringify({
      last_id: data.id,
      data: data
    }), 'utf8');
  },

  fillCardPosition: function(listID) {
    var countOfCardInList = this.get().filter(function(object) {
      return object.listId === listID
    }).length

    if (countOfCardInList === 0) {
      return 1
    } else {
      return countOfCardInList + 1
    }
  }
};