// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

function getWords() {
  for(let category of ["predicates","objects","word-pairs"]) {
    $.get("/"+category).then((data) => {
      $("#"+category).text(data.join("\n"));
    });
  }
}

// On page load, get some words:
$(getWords);