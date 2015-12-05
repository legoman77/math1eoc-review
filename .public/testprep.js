(function(){

var request = new XMLHttpRequest();
request.open('GET', 'questions.json', true);

var data = null;
var qfield = document.querySelector("#question")
var newone = document.querySelector("#newone")

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomQuestion = function () {
  if (data === null) return null;
  var i = randInt(0,data.questions.length);
  return data.questions[i];
}

var showNextQuestion = function () {
    var question = randomQuestion();
    var answers = document.querySelectorAll(".answer");
    qfield.innerText = question.text;
    for (n = 0; n < answers.length; n++) {
      answers[n].innerText = question.answers[n];
    }
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"content"]);
}

var showGame = function () {
  var game = document.getElementById("game")
  game.style.display = "block";
}

//newone.onclick = showNextQuestion;
newone.onclick = showGame;

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    data = JSON.parse(request.responseText);
    return showNextQuestion();
  }
}

request.onerror = function() {
    console.log("problem officer?");
}

request.send();

})();
