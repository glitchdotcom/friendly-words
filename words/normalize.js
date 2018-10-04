const fs = require('fs');
let wordLists = {};

const fileNames = fs.readdirSync(__dirname).filter(name => name.endsWith('.txt'));

fileNames.forEach((fileName) => {
  const contents = fs.readFileSync(`${__dirname}/${fileName}`, {encoding:'ascii'});
  const words = contents.split("\n");

  // Start by correcting any casing or whitespace bugs:
  const correctedWords = words.map((word) => word.trim().toLowerCase());
  
  // Reject any remaining uncorrectably entries:
  // (all words must be lower-case ASCII alphabetic characters, non-blank.)
  const filteredWords = correctedWords.filter((word) => /^[a-z]+$/.test(word));
  
  // Remove duplicates:
  const distinctWords = Array.from(new Set(filteredWords));
  
  // ...And alphabetize them:
  const sortedWords = distinctWords.sort();
  
  // construct our new file:
  const newContents = sortedWords.join('\n');
  
  // put word lists into dictionary for module use
  wordLists[`${fileName}`.slice(0,-4)] = sortedWords;
  
  if(contents === newContents) {
    return;
  }

  fs.writeFileSync(`${__dirname}/${fileName}`, newContents, {encoding:'ascii'});
    
  const filteredCount = correctedWords.length - filteredWords.length;
  const distinctCount = filteredWords.length - distinctWords.length;
  console.log(`Normalized ${fileName}`);
  console.log(`Invalid entries removed: ${filteredCount}`);
  console.log(`Duplicate entries removed: ${distinctCount}`);
  console.log(`Words in the file have been lower-cased, trimmed, and alphabetized.`);
});

fs.writeFileSync(`generated/words.js`, wordLists, {encoding:'ascii'});

// these will need to be manually updated if we add more word lists
exports.objects = () => {return wordLists.objects};
exports.predicates = () => {return wordLists.predicates};
exports.teams = () => {return wordLists.teams};