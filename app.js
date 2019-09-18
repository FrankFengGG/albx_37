// 1.引入express
const express = require('express');
const fs = require('fs');
// 2.创建应用
const app = express();
// 3.添加端口监听
app.listen(6666, () => {
  console.log('http://127.0.0.1:6666');
})

// 4.静态资源管理
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('/uploads'));

// 添加一个路由配置
// 读取前台首页
app.get('/', (req, res) => {
  fs.readFile(__dirname + "/views/index.html", (err, data) => {
    if (err) {
      res.end('err')
    } else {
      res.end(data)
    }
  })
})