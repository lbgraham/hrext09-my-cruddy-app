$(document).ready(function() {
  let times = 0;

  $(' .logo ').draggable();

  // Generate a random poem. Currently creates random poem from the data structures in data.js
  $( '#generate-poem' ).click(function(event) {
    event.preventDefault();
    $( 'p' ).remove();

    $.get('http://poetrydb.org/author,title/Shakespeare;Sonnet', function(data) {
      let words = data[1]['lines'];
      poem = words[Math.floor(Math.random() * words.length)].split(' ');
    });
    // Default back to a text file if no access to the API
    if(poem === undefined) {
      poem = randomPoem();
    }

    const extraWords = randomWords();
    const boxStyle = 'style="width: 80px; height: 25px; border: 2px solid black; left: 90px; top: 50px; padding: 10px"';
    let extraBoxStyle = function() {
      return 'style="width: 80px; height: 25px; border: 2px solid black; left: ' + calculatePlacement() + 'px; top: ' + calculatePlacement() + 'px; padding: 10px"';
    }

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
        $( '#extra-magnets' ).append( '<p id="poem-word' + i + '" ' + extraBoxStyle() + '>' + extraWords[i] + '</p>' );
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
        break;
      } else {
        $( '#random-quote' ).html( data.quote + '<br>' + '-' + data.character );
      }
    }
  });

});