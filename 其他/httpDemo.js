/**
 * Created by WANGAQ on 2016/5/8.
 * 简单的web服务器
 */
var http = require('http');

//2.
var requestHandle = function(req,res) {
    res.end('HAI HAI .....');
}

//1.创建web服务器
var web = http.createServer(requestHandle);

//3.创建监听
web.listen(8888);