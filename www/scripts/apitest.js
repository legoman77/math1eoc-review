(function(){

var request = new XMLHttpRequest();
request.open('GET', '/questions.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText);
    var q = document.querySelector(".question");
    q.innerText = data.questions[0].text;
  }
}

request.onerror = function() {
    console.log("problem officer?");
}

request.send();

})();
