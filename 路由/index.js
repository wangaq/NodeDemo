/**
 * Created by WANGAQ on 2016/4/15.
 */
var server = require('./server');
var router = require('./route');

server.start(router.route);


//全局变量
//console.log(__filename);
//console.log(__dirname);