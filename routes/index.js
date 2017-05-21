var path = require('path');
var _ = require('underscore');
var Lists = require(path.resolve(path.dirname(__dirname), 'modules/list.js'));
var Cards = require(path.resolve(path.dirname(__dirname), 'modules/card.js'));
var Labels = require(path.resolve(path.dirname(__dirname), 'modules/label.js'));
var Comments = require(path.resolve(path.dirname(__dirname), 'modules/comment.js'));
/* GET home page. */
module.exports = function(router) {
  router.get("/", function(req, res, next) {
    res.render("index", {
      lists: Lists.get(),
      cards: Cards.get(),
      labels: Labels.get(),
      comments: Comments.get()
    });
  });

  router.get("/lists", function(req, res, next) {
    var lists = Lists.get();
    res.json(lists);
  });

  router.route("/labels").post(function(req, res) {
    var label = req.body
    var labels = Labels.get();

    label.id = Labels.getLastID() + 1;
    labels.push(label);
    Labels.set(labels);
    res.json(label);
  });

  router.route("/labels/:id").put(function(req, res) {
    var labels = Labels.get();
    var current_label = _(labels).findWhere({ id: +req.body.id });

    // _.extend({id: 1, position: 1, title: 'ken'}, {position: 2});
    // >> Object {id: 1, position: 2, title: "ken"}
    _.extend(current_label, req.body);
    Labels.set(labels);
    res.json(current_label);
  })
  .delete(function(req, res) {
    var labels = _(Labels.get()).reject(function(a) {
      return a.id === +req.params.id;
    });

    Labels.update(labels);

    res.json(labels);
  });

  router.route("/lists/:id").put(function(req, res) {
    var lists = Lists.get();
    var current_list = _(lists).findWhere({ id: +req.body.id });

    // _.extend({id: 1, position: 1, title: 'ken'}, {position: 2});
    // >> Object {id: 1, position: 2, title: "ken"}
    _.extend(current_list, req.body);
    Lists.set(lists);
    res.json(current_list);
  });

  router.route("/cards/:id").get(function(req, res) {
    res.render('index', {
      lists: Lists.get(),
      cards: Cards.get(),
      labels: Labels.get(),
      comments: Comments.get()
    });
  })
  .put(function(req, res) {
    var cards = Cards.get();
    var current_card = _(cards).findWhere({ id: +req.body.id });

    _.extend(current_card, req.body);
    Cards.update(cards);
    res.json(current_card);
  })
  .delete(function(req, res) {
    var cards = _(Cards.get()).reject(function(a) {
      return a.id === +req.params.id;
    });

    Cards.update(cards);

    res.json(cards);
  });

  router.route("/comments/:id").put(function(req, res) {
    var comments = Comments.get();
    var current_comment = _(comments).findWhere({ id: +req.body.id });

    _.extend(current_comment, req.body);
    Comments.update(comments);
    res.json(current_comment);
  })
  .delete(function(req, res) {
    var comments = _(Comments.get()).reject(function(a) {
      return a.id === +req.params.id;
    });

    Comments.update(comments);

    res.status(200).end();
  });

  router.post("/comments", function(req, res, next) {
    var comment = req.body
    var comments = Comments.get();

    comment.id = Comments.getLastID() + 1;
    
    comments.push(comment);
    Comments.set(comments);
    res.json(comment);
  });

  router.post("/cards", function(req, res) {
    var card = req.body
    var cards = Cards.get();

    card.id = Cards.getLastID() + 1;
    cards.push(card);
    Cards.set(cards);
    res.json(card);
  });


  router.post("/newlist", function(req, res, next) {
    // req.body from ajax data attribure
    var list = req.body
    var lists = Lists.get();

    list.id = Lists.getLastID() + 1;
    list.position = Lists.get().length + 1;
    lists.push(list);
    Lists.set(lists);
    res.json(list);
  });

  router.post("/newcard", function(req, res, next) {
    // req.body from ajax data attribure
    var card = req.body
    var cards = Cards.get();

    card.id = Cards.getLastID() + 1;
    card.listId = Number(card.listId);
    card.position = Cards.fillCardPosition(card.listId);
    cards.push(card);
    Cards.set(cards);
    res.json(card);
  });

}
