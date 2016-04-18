/**
 * Created by WANGAQ on 2016/4/15.
 */
var express = require('express');
var app = express();

app.get('/',function(req,res) {
    console.log('请求成功。。。');
    res.send('请求成功。。。');
});

var server = app.listen('8888',function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例 访问地址为  http://%s:%s",host,port);
});