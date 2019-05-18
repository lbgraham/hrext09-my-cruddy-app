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
    ].join(" ");
  };

  $('#generate-poem').click(function(event) {
    event.preventDefault();
    var poem = "<p>" + randomMessage() + "</p>";
    $( "#poem" ).append( poem );
  });

  $( "#magnets" ).draggable();

});
