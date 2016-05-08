/**
 * Created by WANGAQ on 2016/5/8.
 * 创建TCP客户端
 */
var net = require('net');

const PORT = '8888';
const HOST = '127.0.0.1';


var tcpClient = net.Socket();
tcpClient.connect(PORT,HOST,function() {
    console.log('server connect success');
    tcpClient.write('hello,this is a client');
});

tcpClient.on('data',function(data) {
    console.log('get data from server', data.toString())
})