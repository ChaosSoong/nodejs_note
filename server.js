var http = require("http");
var server = http.createServer(function(request, response){
    response.writeHead(200,{'content-Type':'text/plain'});
    response.end("Hello Chaos");
});
server.listen(8888);
console.log("server startup at localhost:8888");