
const express = require('express')
const bodyParser = require('body-parser')
const app  = express()
const http = require('http').Server(app)
const io   = require('socket.io')(http)
const routes = require('./routes')

app.use(bodyParser.json())

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/index.html')
})

io.on('connection', client => {
  console.log('Socket ID:', client.id);
  // send the clients id to the client itself.
  client.send(client.id);

  client.on('disconnect', function () {
    console.log('client disconnected');
  })
})

app.post('/issues', routes.issues(io))

http.listen(3000, function(){
  console.log('listening on *:3000')
})
