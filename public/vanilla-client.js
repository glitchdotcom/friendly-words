// client-side js
// run by the browser each time your view template is loaded

(function(){
  console.log('hello world :o');
  
  const dreams = [
    'Find and count some sheep',
    'Climb a really tall mountain',
    'Wash the dishes'
  ];
  
  const dreamsList = document.getElementById('dreams');
  const dreamsForm = document.forms[0];
  
  dreams.forEach( function(dream) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = dream;
    dreamsList.appendChild(newListItem);
  });
  
  dreamsForm.onsubmit = function(event) {
    event.preventDefault();
    
    const dream = 
  };
  
})()

/*
$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});
*/