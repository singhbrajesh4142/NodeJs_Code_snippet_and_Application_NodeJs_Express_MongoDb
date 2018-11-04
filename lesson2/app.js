var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs');
//app.use('route',express.static('pathOfStaticFiles'));
app.use('/style',express.static('style'));

app.get('/',function(req, res) {
  res.render('index');
});

app.get('/contact',function(req, res) {
  //res.sendFile(__dirname + '/app.js');
  console.log(req.query);
  res.render('contact',{qs:req.query});
});

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/contact', urlencodedParser, function(req, res) {
  console.log(req.body);
  res.render('index');
});

app.get('/profile/:name',function(req, res) {
  //res.send("You requested to see profile with id : " + req.params.name);
  var data = {Age: 21,
              Job: 'Looking for a job',
              skills: ['c','c++','java','nodeJs','AngularJs','PHP','ASP.NET']
            };
  res.render('profile', {person: req.params.name , data: data});
});

app.listen(4444);
