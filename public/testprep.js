(function(){

var request = new XMLHttpRequest();
request.open('GET', '/questions.json', true);

var data = null;
var randomQuestion = function () {
  if (data === null) return null;
}

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    data = JSON.parse(request.responseText);
    var q = document.querySelector("#question");
    q.innerText = data.questions[0].text;
  }
}

request.onerror = function() {
    console.log("problem officer?");
}

request.send();

})();
