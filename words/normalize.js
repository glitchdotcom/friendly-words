const fs = require('fs');

console.log("Starting Normalize");

["objects.txt", "predicates.txt"].forEach((fileName) => {
  console.log("Normalizing:", fileName);
  const contents = fs.readFileSync(__dirname + `/${fileName}`, {encoding:'ascii'})
  const words = contents.split("\n");

  // Start by correcting any casing or whitespace bugs:
  const cleanedWords = words.map((word) => word.trim().toLowerCase());
  
  // Reject any remaining uncorrectably entries:
  // (all words must be lower-case ASCII alphabetic characters, non-blank.)
  const filteredWords = words.filter((word) => !!word.match(/^[a-z]+$/i));
  
  // Filter for distinct works:
  const distinctWords = Array.from(new Set(filteredWords));
  
  // ...And alphabetize them:
  const sortedWords = distinctWords.sort();
  
  // construct our new file:
  const newContents = sortedWords.join('\n');
  
  if(contents === newContents) {
    console.log(`Nothing to change.`);
    return;
  }

  fs.writeFileSync(__dirname + `/${fileName}`, newContents, {encoding:'ascii'});
    
  const filteredCount = cleanedWords.length - filteredWords.length;
  const distinctCount = distinctWords.length - filteredWords.length;
  console.log("Changes applied.");
  console.log(`Invalid entries removed: ${filteredCount}`);
  console.log(`Duplicate entries removed: ${distinctCount}`);
  console.log(`File has been alphabetized and trimmed.`);
});
                                          
console.log("All done.");
