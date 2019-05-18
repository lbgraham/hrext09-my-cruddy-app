var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

$(document).ready(function() {

  var randomElement = function(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  var randomPoem = function() {
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
    $( 'p' ).remove();

    var poem = randomPoem();
    var extraWords = randomPoem().concat(randomPoem());
    var boxStyle = 'style="display: flex; justify-content: center; \
      align-text: center; height: 25px; border: 2px solid black; padding: 10px"';

    jsonPoem = JSON.stringify(poem);
    createItem('poem' + String(times++), jsonPoem);

    for(var i = 0; i < poem.length; i++) {
      if(poem[i] !== '') {
        $( '#magnets' ).append( '<p id="poem-word' + i + '" ' + boxStyle + '>' + poem[i] + '</p>' );
        $( '#poem-word' + i ).draggable();
      }
    }

    for(var i = poem.length; i < extraWords.length; i++) {
      if(extraWords[i] !== '') {
        $( '#extra-magnets' ).append( '<p id="poem-word' + i + '" ' + boxStyle + '>' + extraWords[i] + '</p>' );
        $( '#poem-word' + i ).draggable();
      }
    }    
  });

  $.get('https://got-quotes.herokuapp.com/quotes', function(data) {
    $( '#random-quote' ).html( data.quote + '<br>' + '-' + data.character );
  });

});