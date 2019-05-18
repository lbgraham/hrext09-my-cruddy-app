$(document).ready(function() {
  window.streams = {};
  streams.home = [];
  streams.users = {};
  window.users = Object.keys(streams.users);

  var randomElement = function(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  var randomMessage = function() {
    return [
      randomElement(opening),
      randomElement(verbs),
      randomElement(objects),
      randomElement(nouns),
      randomElement(tags)
    ];
  };

  $('#generate-poem').click(function(event) {
    event.preventDefault();
    var poem = randomMessage();
    console.log(poem);

    for(var i = 0; i < poem.length; i++) {
      $( '#poem' ).append( '<p>' + poem[i] + '</p>' );
    }
  });

  $( "#magnets" ).draggable();

});
