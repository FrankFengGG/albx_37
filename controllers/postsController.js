// 所有与posts表相关的业务处理都在这个文件中实现
const postModel = require('../models/postsModel.js');
module.exports = {
  // 获取所有文章列表数据
  getPostList(req, res) {
    // 调用数据模块进行数据的获取
    postsModel.getPostList((err, data))
  }
}