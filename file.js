var fs = require('fs');
// var data = fs.readFileSync("package.json");
// console.log(data.toString());
fs.readFile('package.json',function(error,data){
    if(error){
        console.log(error)
    };
    console.log(data.toString());
});