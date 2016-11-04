var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
    console.log("连接成功.");
    eventEmitter.emit('data_received');//触发data_received事件
};
eventEmitter.on('connection',connectHandler);//绑定connection事件
eventEmitter.on('data_received',function(){  //绑定data_received事件
    console.log('数据接收成功.'); 
});
eventEmitter.emit('connection');//触发connection事件