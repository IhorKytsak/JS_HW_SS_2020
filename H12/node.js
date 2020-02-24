let http = require("http");
let url = require("url");
let date = require("./script");
let static = require("node-static");
let file = new static.Server(".", {
  cache: 0
});

function accept(request, response) {
  if (request.url == "./vote.txt") {
    (function() {
      file.serve(request, response, date);
      file.serve(date);
    });
  } else {
    file.serve(request, response);
  }
}

http.createServer(accept).listen(6000);
console.log("Server running et http://127.0.0.1:6000 ");
