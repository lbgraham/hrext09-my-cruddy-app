let poem;
let here = $.get('http://poetrydb.org/author,title/Shakespeare;Sonnet', function(data) {
  let words = data[0]['lines'];
  poem = words[Math.floor(Math.random() * words.length)].split(' ');
});