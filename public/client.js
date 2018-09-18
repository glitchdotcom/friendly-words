// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

function getWords() {
  $.get("/predicates").then((data) => {
    console.log("yo", data);
    $("#predicates").val(JSON.stringify(data));
  });
  $.get("/objects");
  $.get("/word-pairs");
}