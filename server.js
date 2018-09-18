const express = require('express');
const app = express();
const fs = require('fs');

// Host our static site, thereby providing our html, css, and js.
app.use(express.static('public'));

// Load the words into memory:
const getWords = (fileName) => {
  const fileContents = fs.readFileSync(__dirname + `/words/${fileName}`, {encoding:'ascii'})
  return fileContents.split("\n");
}
const objects = getWords('objects.txt');
const predicates = getWords('predicates.txt');

console.log(objects, predicates); 
app.get('/word-pairs/', ()=>{});
app.get('/objects/', ()=>{});
app.get('/predicates/', ()=>{});


// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
