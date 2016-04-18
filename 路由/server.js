/**
 * Created by WANGAQ on 2016/4/15.
 */
var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request,response) {
        var pathName = url.parse(request.url).pathname;
        console.log('请求路径：', pathName)

        route(pathName);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write('请求成功');
        response.end;
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has start................')
}

exports.start = start;