(function(){

var request = new XMLHttpRequest();
request.open('GET', '/questions.json', true);

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
    try {
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,"content"]);
    } catch(err){ }
}

newone.onclick = showNextQuestion;

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
