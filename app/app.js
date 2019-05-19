let here = $.get('http://poetrydb.org/author,title/Shakespeare;Sonnet', function(data) {
  let words = data[0]['lines'];
  poem = words[Math.floor(Math.random() * words.length)].split(' ');
});

$(document).ready(function() {
  let times = 0;

  // Selects the random word for each part of speech
  const randomElement = function(array) {
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  };

  const randomWords = function() {
    let extraMagnetWords = [];
    for(let i = 0; i < 20; i++) {
      extraMagnetWords.push(words[Math.floor(Math.random() * words.length)]);
    }

    return extraMagnetWords;
  }

  $(' .logo ').draggable();

// Testing area for logo randomness
  // let logoArea = $('#logo-container');
  // let newWidth = 120;
  // let newHeight = 180;

  // function randomPlacement(logoContainer) {
  //   let containerWidth = logo.width();
  //   let containerHeight = logo.height();
  //   let randWidth = Math.floor(Math.random() * containerWidth);
  //   let randHeight = Math.floor(Math.random() * containerHeigth);

  //   let logo = $(document.createElement('div'));
  //   logo.addClass('logo');
  //   logo.css({
  //     top: randHeight,
  //     left: randWidth,
  //     position: 'absolute'
  //   });

  //   logoContainer.append(logo);
  //   logo.animate({
  //     width: newWidth,
  //     height: newHeight
  //   }, 3000);
  // }

  // setInterval(function() {
  //   randomPlacement(logoArea);
  // }, 1000);

// End testing area for logo randomness

  // Generate a random poem. Currently creates random poem from the data structures in data.js
  $( '#generate-poem' ).click(function(event) {
    event.preventDefault();
    $( 'p' ).remove();



    // let poem = randomPoem();
    console.log(poem);
    const extraWords = randomWords();
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
        $( '#extra-magnets' ).append( '<p id="poem-word' + i + '" ' + boxStyle + '>' + extraWords[i] + '</p>' );
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