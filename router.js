const express = require('express');
const pagesController = require('./controllers/pagesController.js');
// 创建路由模块对象
const router = express.Router();
// 添加路由配置

// 读取前台首页
// 回调函数:当响应一个路由请求的时候，会自动的调用传入的回调函数， 
router.get('/', (req, res) => {
  pagesController.getIndexPage(req, res);
})
router.get('/detail', (req, res) => {
  pagesController.getDetailPage(req, res);
})

router.get('/list', (req, res) => {
  // render:读取文件，使用指定的模版引擎渲染，并返回
  pagesController.getListPage(req, res);
})

// 读取后台首页： 约定后台页面都以/admin开头
router.get('/admin', (req, res) => {
  // render:读取文件，使用指定的模版引擎渲染，并返回
  pagesController.getAdminIndexPage(req, res);
})


router.get('/admin/categories', (req, res) => {
  pagesController.getAdminCategoriesPage(req, res);
})

// 暴露
module.exports = router