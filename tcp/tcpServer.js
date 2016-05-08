/**
 * Created by WANGAQ on 2016/5/8.
 * 创建TCP简单服务
 */
var net = require('net');

const PORT = '8888';
const HOST = '127.0.0.1';

var clientHandler = function(socket) {
    console.log('someone connect..');

    socket.on('data',function dataHandler(data) {
        console.log(socket.remoteAddress, socket.remotePort, 'send', data.toString());
        socket.write('hello,this is server');
    });

    socket.on('close',function() {
        console.log(socket.remoteAddress, socket.remotePort, 'disconnected');
    });
}

var tcpWeb = net.createServer(clientHandler)
tcpWeb.listen(PORT,HOST);
console.log('tcp server running on http://' + HOST + ':' + PORT)