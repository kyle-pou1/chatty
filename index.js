var express = require('express')
var bodyParser = require('body-parser');


var messages = [


]
var app = express();


app.use(express.static('assets'));
app.use(bodyParser.json());

app.get('/messages', function(req, res, next){
  res.status(200).json({ messages: messages });
})

app.post('/messages', function(req, res, next){
  messages.push({name: req.body.message, message: req.body.message, time: new Date()});
  res.status(200).json({ messages: messages })
})


var port = 3000
app.listen(port, function(){
console.log("listening on port " + port);
});
