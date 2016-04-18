/**
 * Created by WANGAQ on 2016/4/15.
 */
//引入events模块
//events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是 事件触发emit 与 事件监听器on 功能的封装。
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('eventName',function() {
    console.log('eventName 事件触发。。')
});

setTimeout(function() {
    event.emit('eventName')
},2000);