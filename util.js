var util = require("util");
function Base(){
    this.name = "Base";
    this.birth = 1992;
    this.sayHello = function(){
        console.log("Hello "+this.name);
    };
};
Base.prototype.show = function(){
    console.log(this.name+" is "+this.birth+" year.");
};
function Sub(){
    this.name = "chaos";
};
util.inherits(Sub,Base);
var objBase = new Base();
objBase.show();
objBase.sayHello();
var objSub = new Sub();
//objSub.sayHello(); //Sub没有继承Base中的属性birth和sayHello方法
objSub.show();

var util = require('util'); 
function Person() { 
	this.name = 'chaos'; 
	this.toString = function() { 
	    return this.name; 
	}; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true,null,true));