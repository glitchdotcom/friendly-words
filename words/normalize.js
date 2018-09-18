const fs = require('fs');
const Set = Set; // <--

console.log("Starting Normalize");
for(let fileName of ["objects.txt", "predicates.txt"]) {
  console.log("Normalizing:", fileName);
  const contents = fs.readFileSync(__dirname + `${fileName}`, {encoding:'ascii'})
  const words = contents.split("\n");

  // Start by correcting any casing or whitespace bugs:
  const cleanedWords = words.map((word) => word.trim().toLowerCase());
  
  // Reject any remaining uncorrectably entries:
  // (all words must be lower-case ASCII alphabetic characters, non-blank.)
  const filteredWords = words.filter((word) => !!word.match(/^[a-z]+$/i));
  
  // Filter for distinct works:
  const distinctWords = Array.from(new Set(cleanedWords));
  
  // ...And alphabetize them:
  const sortedWords = distinctWords.sort();
  
  // construct our new file:
  const newContents = sortedWords.join('\n');
  
  if(contents === newContents) {
    console.log(`Nothing to change in ${fileName}`);
  } else {
    fs.writeFileSync(__dirname + `${fileName}`, newContents, {encoding:'ascii'});
    
    const filteredCount = cleanedWords.length - filteredWords.length;
    const distinctCount = distinctWords.length - filteredWords.length;
    console.log("Changes made to normalize file:", fileName);
    console.log(`Invalid entries removed: ${filteredCount}`);
    console.log(`Duplicate entries removed: ${distinctCount}`);
    console.log(`File has been alphabetized and trimmed.`);
  }
}