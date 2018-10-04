const fs = require('fs');

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

const getWords = (fileName) => {
  const fileContents = fs.readFileSync(__dirname + `/words/${fileName}`, {encoding:'ascii'})
  return fileContents.split("\n");
}