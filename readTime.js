// 487 words on my page, not including "x minute to read"

function howLong() {
    var wpm = 230;
    var howLongToRead = (arrayWordsOnly.length + 1)/wpm;
    howLongToRead = Math.round(howLongToRead);
    var timeToRead = document.getElementsByClassName('timeToRead');
    timeToRead[0].innerHTML = howLongToRead + " minute read";
};

howLong();

// AS A PROGRAMMER, TO CHANGE WORDS READ PER MINUTE, USE THE FOLLOWING FUNCTION:
function customhowLong(wpm) {
    var howLongToRead = (arrayWordsOnly.length + 1)/wpm;
    howLongToRead = Math.round(howLongToRead);
    var timeToRead = document.getElementsByClassName('timeToRead');
    timeToRead[0].innerHTML = howLongToRead + " minute read";
};

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
