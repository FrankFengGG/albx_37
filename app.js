// 1.引入express
const express = require('express');
const fs = require('fs');
const router = require('./router');
const bodyParser = require('body-parser');
// 2.创建应用
const app = express();
// 3.添加端口监听
app.listen(4444, () => {
  console.log('http://127.0.0.1:4444');
})

// 4.静态资源管理
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('/uploads'));

// 配置Body-parser
app.use(bodyParser, urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// 配置ejs
app.set('view engine', 'ejs');
// 配置让当前app使用ejs作为模板引擎
// 配置ejs资源的默认目录, 后期在渲染的时候可以只需要指定相对路径就可以了
// ejs会默认查找views下面的文件作为模版文件，我们这个配置只是想告诉它所需要的views目录就是我们当前所设置的views目录
app.set('views', 'views')

// 使用路由
app.use(router);