var app = require('express')();

//create the server app
var http = require('http').Server(app);
var io = require('socket.io')(http);
var pg = require('pg');

//connection to database
var conString = "postgres://postgres:12345@localhost/postgres";
var client = new pg.Client(conString);
client.connect();

//provides the interface (index.html) file to client
app.get('/', function(req, res){
	res.sendFile('index.html', {root: __dirname});
});

io.on('connection', function(socket){
	
	//triggers on messages received
	socket.on('chat message', function(user, msg){
  	
  		// record the message on the database
  		client.query("INSERT INTO messages(chat_user, chat_message) values($1, $2)", [user, msg]);
    	
    	//displays the message on the console
    	console.log(user + ' says ' + msg);
    	
    	//broadcast the message to all the users (except the sender)
    	socket.broadcast.emit('chat message',user + ' says ' + msg);
  	});
});

//http server ready, listening for incoming connections on port:2000
http.listen(80, function(){
  console.log('listening on *:80');
});