/**
 * Created by WANGAQ on 2016/4/15.
 *
 */
    //流事件
    //data - 当有数据可读时触发。
    //end - 没有更多的数据可读时触发。
    //error - 在接收和写入过程中发生错误时触发。
    //finish - 所有数据已被写入到底层系统时触发。
var stream  = require('fs');
var data = '';
//创建可可读流
var readStream = stream.createReadStream('input.txt');
//创建编码
readStream.setEncoding('UTF-8');
// 处理流事件 --> data, end, and error
readStream.on('data',function(chunk) {
    data += chunk;
});

readStream.on('end',function() {
    console.log('没有更多的数据可读时触发',data);
});

readStream.on('error',function(err) {
    console.log(err.stack)
});

console.log('程序执行完毕。。。。。');