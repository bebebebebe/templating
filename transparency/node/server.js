var express      = require('express'),
    jsdom        = require('jsdom').jsdom,
    doc          = jsdom('<html><body><ul id="items"><li class="name"></li></ul></body></html>'),
    Transparency = require('transparency'),
    listTmpl    = doc.getElementsByTagName('ul')[0],
    app;

app = express();

app.get('/', function(req, res) {
  var data = [
    { name: 'Alice'},
    { name: 'Bob'},
    { name: 'Carol'}
  ];

  return res.send(Transparency.render(listTmpl, data).outerHTML);
});

app.listen(3000);

console.log('Express server listening on port 3000');