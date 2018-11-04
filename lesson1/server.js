var fs = require('fs');
var http = require('http');

/*
var readStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');

readStream.on('data',function(chunk) {
  console.log('new chunk received:');
  console.log(chunk);
  writeStream.write(chunk);
})
*/

//readStream.pipe(writeStream);


var server = http.createServer(function(request, response) {
  if(request.url === '/index.html' || request.url === '/'){
    response.writeHead(200,{'Content-Type':'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html','utf8');
    readStream.pipe(response);
  }else if(request.url === '/contact.html' || request.url === '/contact'){
    response.writeHead(200,{'Content-Type':'text/html'});
    var readStream = fs.createReadStream(__dirname + '/contact.html','utf8');
    readStream.pipe(response);
  }else{
    response.writeHead(404,{'Content-Type':'application/json'});
    var error = {
      Error: "Error 404: Page Not Found!"
    };
    response.end(JSON.stringify(error));
  }
});

var PORT = 9999;
server.listen(PORT,'127.0.0.1');
console.log('Server is listening on '+PORT);
