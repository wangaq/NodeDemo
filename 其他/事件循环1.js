/**
 * Created by WANGAQ on 2016/4/15.
 */
//引入模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
//声明事件处理程序
var handleMethode = function () {
    console.log('连接成功。。。。。')
}
//绑定事件及处理程序
eventEmitter.on('eventName',handleMethode);
//程序触发事件
eventEmitter.emit('eventName');