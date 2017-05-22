# Trello Clone App

This is my implementation of the Trello. It's not intended as a complete replication of the App. It's purpose is for studying of JavaScript, jQuery and Backbone


If you want to try it, run
`bower install` and `npm install` to install all dependencies and start the page by `npm start`

The page link is localhost:3000

#### Features

* `List creation`
* `Card creation`
* `Card edit`: add labels, duedate, comments, description, move and copy
* `List and Card drag function`
* `Card search function`: search the card title and description match the query
* `Notifications`: If a card is subscribed, the actions performed on the card will show in the notifications(Add duedate, change duedate, add comments, move or copy card)

# Stack

### Back-end

* `node`, `express`: server and router
* `jade(now pug)`, `stylus`: pre-processor for html and CSS
* `json`: file type to persist the data
* `bower`, `grunt`: construct all vendor file dependencies and file minification

### Front-end

* `Backbone`: Manage Model, colleciton, views and routes to minimize page reloads
* `jQuery`: DOM manipulation and user interaction
* `moment.js`: manage date displayed
* `jQuery-ui`: drag function and datepicker plugin
* `handlebars`: HTML template used with Backbone views