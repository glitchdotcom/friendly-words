const express = require('express');
const app = express();
const friendlyWords = require('./index');

// Host our static site, thereby providing our html, css, and js.
app.use(express.static('public'));

// CORS - Allow pages from any domain to make requests to our API
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return next();
});

app.get('/word-pairs/', (req, res)=>{
  res.json(friendlyWords.wordPairs());
});
app.get('/objects/', (req,res)=>{
  res.json(friendlyWords.objects());
});

app.get('/predicates/', (req,res)=>{
  res.json(friendlyWords.predicates());
});

app.get('/team-pairs/', (req, res)=>{
  res.json(friendlyWords.teamPairs());
});

app.get('/teams/', (req, res)=>{
  res.json(friendlyWords.teams());
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
