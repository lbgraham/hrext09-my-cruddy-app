// Local storage CRUD functions
let store = () => {
  
  let getItem = (key) => {
    return window.localStorage.getItem(key);    
  };

  let create = (key, value) => {
    return window.localStorage.setItem(key, value);    
  };

  let update = (key, value) => {
    return window.localStorage.setItem(key, value);    
  };

  let rm = (key) => {
    return window.localStorage.removeItem(key);    
  };

  let clearAll = () => {
    return window.localStorage.clear();    
  };

  return { getItem, create, update, rm, clearAll };
};

let ls = store();

$(document).ready(function() {
  var times = 0;

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
    console.log(store);
    ls.create('poem' + String(times++), jsonPoem);

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