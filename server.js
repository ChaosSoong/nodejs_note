var http = require("http");
var url = require("url");
var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    if(pathname = "first"){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end("Hello Chaos");
    }
    if(pathname = "second"){
        console.log(process.platform);
        console.log(process.pid);
        console.log(process.env);
    }
    
});
server.listen(8888);
console.log("server startup at localhost:8888");