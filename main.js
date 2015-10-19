  //turn all text into a string
  var allText = document.body.textContent;

  //turn each word of body into an array item
  var arrayText = allText.split(" ");

  //filter out spaces
  //Thanks for the tip Paul Draper (and Max!) http://stackoverflow.com/questions/20668872/remove-whitespace-only-array-elements
  var arrayWordsOnly = arrayText.filter(function(str) {
    return (/\S/).test(str);
});
