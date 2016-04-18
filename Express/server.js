/**
 * Created by WANGAQ on 2016/4/18.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser  = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/index.html',function(req,res) {
    //res.send()
    res.sendFile( __dirname + "/public/" + "index.htm" );
})

app.get('/getData', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/getData', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})