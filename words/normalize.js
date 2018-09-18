const fs = require('fs');

console.log("Starting Normalize");
for(let fileName of ["objects.txt", "predicates.txt"]) {
  console.log("Normalizing:", fileName);
  const contents = fs.readFileSync(__dirname + `${fileName}`, {encoding:'ascii'})
  const words = contents.split("\n");

  // Clean out casing and whitespace bug
  const cleanedWords = words.map((word) => word.trim().toLowerCase());
  const filteredWords = cleanedWords.filter(word) => (
  const distinctWords = Array.from(new Set(cleanedWords));
  const sortedWords = distinctWords.sort();
  });
}