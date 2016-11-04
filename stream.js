var fs = require('fs');

var read = fs.createReadStream("package.json");
var write = fs.createWriteStream("output.txt");
read.pipe(write);

function fn(){
    var data = "";
    var readerStream = fs.createReadStream("output.txt");
    readerStream.setEncoding("UTF8");
    //处理流事件
    readerStream.on('data',function(chunk){
        data += chunk;
    });
    readerStream.on('end',function(){
        console.log(data);
    });
    readerStream.on('error',function(err){
        console.log(err.stack);
    });
    console.log('结束');
};
setTimeout(fn,4000);
