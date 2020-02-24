exports.myData = function() {
  return Date();
};


function button() {
    let ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function() {
      if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
        document.getElementById("vote").innerHTML = ajaxRequest.responseText;
      }
    };
    ajaxRequest.open("GET", "./vote.txt", true);
    ajaxRequest.send();
  }
  let vote = document.getElementById("vote");
  vote.addEventListener("click", button);