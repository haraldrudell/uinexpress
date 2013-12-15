var express = require("express"),
        app = express(),
 uinexpress = require("uinexpress");

app.configure(function () {
  app.engine('html', require('uinexpress').__express)
  app.set('view engine', 'html')
  app.set('view options', { layout: false });
});

app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Hello Underscore Express!',
        name: "Your Name Here..."
    });
});

app.listen(8000);
console.log('App listening at: http://localhost:8000/');