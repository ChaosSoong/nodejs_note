var http = require("http");
var url = require("url");
var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    if(pathname = "first"){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end("Hello Chaos");
    }
    if(pathname = "second"){
        console.log("Hello second");
    }
    
});
server.listen(8888);
console.log("server startup at localhost:8888");