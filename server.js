const express = require("express");
const lorem = require("lorem-ipsum");
const app = express();
const port = 3000;
const output = lorem({
    count: 3                      // Number of words, sentences, or paragraphs to generate. 
  , units: 'paragraphs'            // Generate words, sentences, or paragraphs. 
  , sentenceLowerBound: 5         // Minimum words per sentence. 
  , sentenceUpperBound: 15        // Maximum words per sentence. 
  , paragraphLowerBound: 3        // Minimum sentences per paragraph. 
//   , paragraphUpperBound: 7        // Maximum sentences per paragraph. 
  , format: 'html'               // Plain text or html 
//   , words: ['ad', 'dolor']  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default. 
//   , random: Math.random           // A PRNG function. Uses Math.random by default 
});

app.get('/', function (req, res) {
  res.send(output);
});

app.listen(3000, function () {
  console.log('Successfully started random Text app');
});