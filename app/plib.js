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

  for(let i = 0; i < 3; i++) {
     extraMagnetWords.push(tags[Math.floor(Math.random() * tags.length)]);
  }

  return extraMagnetWords;
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

const calculatePlacement = function() {
  let result = 0;
  let neg = Math.floor(Math.random() * 2);
  let magnitude = Math.floor(Math.random() * 100);

  if(neg === 0) {
    result = -1 * magnitude;
  } else {
    result = magnitude;
  }

  return result;
};
