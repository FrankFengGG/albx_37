// 这个文件用于处理所有与posts相关的数据操作
const mysql = require('mysql');
// 创建连接对象
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'baixiu'
})

module.exports = {
  
}