const fs = require('fs');
const sampleSize = require('lodash.samplesize');

// Load the words into memory:
const getWords = (fileName) => {
  const fileContents = fs.readFileSync(__dirname + `/words/${fileName}`, {encoding:'ascii'})
  return fileContents.split("\n");
}
const OBJECTS = getWords('objects.txt');
const PREDICATES = getWords('predicates.txt');
const TEAMS = getWords('teams.txt');

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

exports.wordPairs = () => {return pairs(sample(PREDICATES), sample(OBJECTS))};
exports.objects = () => {return sample(OBJECTS)};
exports.predicates = () => {return sample(PREDICATES)};
exports.teamPairs = () => {return pairs(sample(PREDICATES), sample(TEAMS))};
exports.teams = () => {return sample(TEAMS)};
