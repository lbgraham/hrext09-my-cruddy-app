$(document).ready(function() {

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
      if(poem[i] !== '') {
        $( '#magnets' ).append( '<p class="poem-word' + i + '">' + poem[i] + '</p>' );
        $( '.poem-word' + i ).draggable();
      }
    }
  });

});
