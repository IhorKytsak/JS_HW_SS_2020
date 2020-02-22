let http = require("http");
let os = require('os');
let path = require('path');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h1>System 1nformation</h1>
    Current user name: ${ os.userInfo().username }<br/>
    OS type: ${ os.type() }<br/>
    System work time: ${ (os.uptime()/60).toFixed(2) } minutes<br/>
    Current work directory: ${ path.dirname(__filename) }<br/>    
    Server file name: ${ path.basename(__filename) }<br/>`);
    response.end();
}).listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
