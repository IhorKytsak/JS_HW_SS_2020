let http = require('http');
let os = require('os');
let Hello = require('./personalmodule.js');
let hello = new Hello( os.userInfo().username );

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write( `<div>
    Date of request: ${ hello.getDate() }<br/>
    ${hello.greetUser()}
    </div>` );
    response.end();
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');