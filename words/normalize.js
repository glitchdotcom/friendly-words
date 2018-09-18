const fs = require('fs');

console.log("Starting Normalize");
for(let fileName of ["objects.txt", "predicates.txt"]) {
  console.log("Normalizing:", fileName);
  const contents = fs.readFileSync(__dirname + `${fileName}`, {encoding:'ascii'})
  const words = contents.split("\n");
  const cleanedWords = words.map((word) => (word.toLower()))
}