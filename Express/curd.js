/**
 * Created by WANGAQ on 2016/4/18.
 */
var express = require('express');
var app = express();

var fs = require('fs');

//增加数据
var user = {
    "user4" : {
        "name" : "ramesh4",
        "password" : "password4",
        "profession" : "clerk4",
        "id": 4
    }
};

//查询列表
app.get('/userList',function(req,res) {
    fs.readFile(__dirname + '/public/users.json','utf-8', function(err,data) {
        console.log(data);
        res.send(data)
    });
});
//增加用户
app.get('/addUser',function(req,res) {
    fs.readFile(__dirname + '/public/users.json','utf-8',function(err,data) {
        data = JSON.parse(data);//把字符串解析成对象
        data['user4'] = user['user4'];
        console.log(data);
        res.send(data);
    })
});
//显示单个用户
app.get('/:id',function(req,res) {
    fs.readFile(__dirname + '/public/users.json','utf-8',function(err,data) {
        data = JSON.parse(data);
        var user = data['user' + req.params.id];
        console.log('查找到用户是%s',JSON.stringify(user));
        res.send(JSON.stringify(user));//将对象转化成json字符串
    })
});
//删除单个用户
app.get('/deleteUser/:id',function(req,res) {
    fs.readFile(__dirname + '/public/users.json','utf-8',function(err,data) {
        data = JSON.parse(data);
        //var user = data['user' + req.params.id];
        delete data['user' + req.params.id];
        console.log(JSON.stringify(data));
        res.send(JSON.stringify(data))
    })
});

var server = app.listen(8888,function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务启动。。。请求host：%s,请求端口：%s',host,port);
});