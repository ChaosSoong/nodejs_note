//创建Buffer的三种方法
//方法1:
var buf1 = new Buffer(10);
var buf1_length = buf1.write("chaosaaaaaaaaaazzzzzzzzzzzzzz");//超过长度,截取10个,返回长度,而非Buffer
//方法2
var buf2 = new Buffer([1,2,3,1,7,8,9]);
//方法3
var buf3 = new Buffer("chaos"); var buf4 = new Buffer("soong");
var a = [1,2,3];
// console.log(buf1+"...."+buf2.toString()+".."+buf3.toJSON(buf3)+".."+a);
var concat = Buffer.concat([buf4,buf3]); //返回Buffer
console.log(concat.toString());