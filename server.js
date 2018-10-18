const express = require('express');
const app = express();
const friendlyWords = require('./index');
const sampleSize = require('lodash.samplesize');

// Host our static site, thereby providing our html, css, and js.
app.use(express.static('public'));

// CORS - Allow pages from any domain to make requests to our API
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return next();
});

const sample = (words) => {
  return sampleSize(words, 10);
}

const pairs = (firstWords, secondWords) => {
  if(firstWords.length !== secondWords.length) {
    console.error("Word pair collection lengths must match.");
    return null; 
  }
  
  const pairedWords = firstWords.map(
    (firstWord, index) => (`${firstWord}-${secondWords[index]}`)
  );
  
  return pairedWords;
}

app.get('/word-pairs/', (req, res)=>{
  res.json(pairs(sample(friendlyWords.predicates), sample(friendlyWords.objects)));
});
app.get('/objects/', (req,res)=>{
  res.json(sample(friendlyWords.objects));
});

app.get('/predicates/', (req,res)=>{
  res.json(sample(friendlyWords.predicates));
});

app.get('/team-pairs/', (req, res)=>{
  res.json(pairs(sample(friendlyWords.predicates), sample(friendlyWords.teams)));
});

app.get('/teams/', (req, res)=>{
  res.json(sample(friendlyWords.teams));
});

app.get('/collection-pairs/', (req, res)=>{
  res.json(pairs(sample(friendlyWords.predicates), sample(friendlyWords.collections)));
});

app.get('/collections/', (req, res)=>{
  res.json(sample(friendlyWords.collections));
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
