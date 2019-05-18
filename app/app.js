$(document).ready(function() {
  let times = 0;

  // Selects the random word for each part of speech
  const randomElement = function(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  // Constructs the random poem
  const randomPoem = function() {
    return [
      randomElement(opening),
      randomElement(verbs),
      randomElement(objects),
      randomElement(nouns),
      randomElement(tags)
    ];
  };

  $(' .logo ').draggable();

  // Generate a random poem. Currently creates random poem from the data structures in data.js
  $( '#generate-poem' ).click(function(event) {
    event.preventDefault();
    $( 'p' ).remove();

    const poem = randomPoem();
    const extraWords = randomPoem().concat(randomPoem().concat(randomPoem()));
    const boxStyle = 'style="display: flex; justify-content: center; \
      align-text: center; height: 25px; border: 2px solid black; padding: 10px"';

    jsonPoem = JSON.stringify(poem);
    ls.create('poem' + String(times++), jsonPoem);

    for(let i = 0; i < poem.length; i++) {
      if(poem[i] !== '') {
        $( '#magnets' ).append( '<p id="poem-word' + i + '" ' + boxStyle + '>' + poem[i] + '</p>' );
        $( '#poem-word' + i ).draggable();
      }
    }

    for(let i = poem.length; i < extraWords.length; i++) {
      if(extraWords[i] !== '') {
        $( '#extra-magnets' ).append( '<p id="poem-word' + i + '" ' + boxStyle + '>' + extraWords[i] + '</p>' ).fadeIn(800);
        $( '#poem-word' + i ).draggable();
      }
    }    
  });

  // Obtain a random Game of Thrones quote from an API and display in footer
  $.get('https://got-quotes.herokuapp.com/quotes', function(data) {
    let words = data.quote.split(' ');
    for(let i = 0; i < words.length; i++) {
      if(encodedWords.includes(hashCode(words[i].toLowerCase()))) {
        $( '#random-quote' ).html( 'GoT Quote Redacted - Adult Content - Thanks to ' + data.character );
        console.log('Hit it');
        break;
      } else {
        $( '#random-quote' ).html( data.quote + '<br>' + '-' + data.character );
      }
    }
  });

});