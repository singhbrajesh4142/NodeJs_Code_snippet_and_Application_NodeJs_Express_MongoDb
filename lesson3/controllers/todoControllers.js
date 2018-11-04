var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://admin:admintodo1@ds151513.mlab.com:51513/todolist');

//create a schema
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

var data = [];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
/* Code to work with local array */
/*
  app.get('/todo',function(req, res) {
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res) {
      data.push(req.body);
      res.json(data);
  });

  app.delete('/todo:item',function(req, res) {
    //console.log(req.url);
    //console.log(req.params.item);
    data = data.filter(function(todo) {
      //console.log(todo.item.replace(/ /g, '-'));
      return todo.item.replace(/ /g, '-').concat('-') !== req.params.item;
    });
    //data.push({item:'Hi'});
    res.json(data);
  });
*/

/* code to work with live database */
  app.get('/todo',function(req, res) {
    // get data from mongodb and pass it to view
    Todo.find({}, function(err, data) {
        if(err) throw err;
        res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res) {
    // get data from view and pass to mongodb
    var newTodo = Todo(req.body).save(function(err) {
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo:item',function(req, res) {
    // delete the requested item
    console.log(req.params.item.replace(/\-/g,' '));
    Todo.deleteOne({"item": req.params.item.replace(/\-/g,' ')},function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });
};
