//用于创建网站服务器的模块
const http = require('http');
//app对象就是网站服务器对象
const app = http.createServer();
//处理请求参数模块
const querystring = require('querystring');
//当客户端有请求来的时候
app.on('request', (req, res) => {
    //post参数是通过事件的方式接受的
    //data当请求参数传递的时候出发data事件
    //end当参数传递完成的时候出发end 事件
    let postparams = '';
    req.on('data', params => {
        postparams += params;
    });
    req.on('end', () => {
        console.log(querystring.parse(postparams));
    });
    res.end('ok');
});
//监听窗口
app.listen(3000);
console.log('网站服务器启动成功');