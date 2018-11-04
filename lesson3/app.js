var express = require('express');
var todoController = require('./controllers/todoControllers');

var app = express();


//set up template engine
app.set('view engine','ejs');

//static files
app.use('/static',express.static('./static'));


// fire controller
todoController(app);


//listen to a port
app.listen(3000);
console.log('You are listening to port 3000');
