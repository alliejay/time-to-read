// 487 words on my page, not including "x minute to read"

function howLong(wpm) {
    var wpm = wpm || 230;
    if (typeof wpm !== "number") {
    return "Sorry, must use a number";
    } else {
    var howLongToRead = (arrayWordsOnly.length + 1)/wpm;
    howLongToRead = Math.round(howLongToRead);
    var timeToRead = document.getElementsByClassName('timeToRead');
    timeToRead[0].innerHTML = howLongToRead + " minute read";
  }
};

howLong();

// ON BROWSER WPM ADJUSTMENTS
var change = document.getElementById('change');
var customWPM = document.getElementById('customWPM');
var customTime = document.getElementById('customTime');
var submit = document.getElementById('submit');

change.addEventListener("click", function(event) {
  change.classList.add('hidden');
  customWPM.classList.remove('hidden');
  submit.classList.remove('hidden');
  submit.addEventListener("click", function(event) {
    var yourWPM = customWPM.value;
    var numberYourWPM = Math.round(yourWPM);
    var howLongToRead = (arrayWordsOnly.length + 1)/numberYourWPM;
    howLongToRead = Math.round(howLongToRead);
    timeToRead = document.getElementsByClassName('timeToRead');
    timeToRead[0].innerHTML = howLongToRead + " minute read";
  })
})
