// Local storage CRUD functions
const store = () => {
  
  const getItem = (key) => {
    return window.localStorage.getItem(key);    
  };

  const create = (key, value) => {
    return window.localStorage.setItem(key, value);    
  };

  const update = (key, value) => {
    return window.localStorage.setItem(key, value);    
  };

  const rm = (key) => {
    return window.localStorage.removeItem(key);    
  };

  const clearAll = () => {
    return window.localStorage.clear();    
  };

  return { getItem, create, update, rm, clearAll };
};

const ls = store();

$(document).ready(function() {
  let times = 0;

  const randomElement = function(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const randomPoem = function() {
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

    const poem = randomPoem();
    const extraWords = randomPoem().concat(randomPoem());
    const boxStyle = 'style="display: flex; justify-content: center; \
      align-text: center; height: 25px; border: 2px solid black; padding: 10px"';

    jsonPoem = JSON.stringify(poem);
    console.log(store);
    ls.create('poem' + String(times++), jsonPoem);

    for(let i = 0; i < poem.length; i++) {
      if(poem[i] !== '') {
        $( '#magnets' ).append( '<p id="poem-word' + i + '" ' + boxStyle + '>' + poem[i] + '</p>' );
        $( '#poem-word' + i ).draggable();
      }
    }

    for(let i = poem.length; i < extraWords.length; i++) {
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