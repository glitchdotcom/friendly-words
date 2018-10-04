const fs = require('fs');

// Load the words into memory:
const getWords = (fileName) => {
  const fileContents = fs.readFileSync(__dirname + `/words/${fileName}`, {encoding:'ascii'})
  const contents = fileContents.split("\n");
  //console.log(contents);
  return contents;
}
const OBJECTS = getWords('objects.txt');
const PREDICATES = getWords('predicates.txt');
const TEAMS = getWords('teams.txt');

exports.objects = () => {return OBJECTS};
exports.predicates = () => {return PREDICATES};
exports.teams = () => {return TEAMS};
