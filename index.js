const express = require('express');
const app = express();
const fs = require('fs');
const sampleSize = require('lodash.samplesize');

// Load the words into memory:
const getWords = (fileName) => {
  const fileContents = fs.readFileSync(__dirname + `/words/${fileName}`, {encoding:'ascii'})
  return fileContents.split("\n");
}
const OBJECTS = getWords('objects.txt');
const PREDICATES = getWords('predicates.txt');

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

exports.wordPairs = 
exports.objects = 
exports.predicates = 

app.get('/word-pairs/', (req, res)=>{
  res.json(pairs(sample(PREDICATES), sample(OBJECTS)));
});
app.get('/objects/', (req,res)=>{
  res.json(sample(OBJECTS));
});

app.get('/predicates/', (req,res)=>{
  res.json(sample(PREDICATES));
});
