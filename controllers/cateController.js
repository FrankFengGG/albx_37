// 这个文章主要用于处理所有与categories表相关的业务员
const cateModel = require('../models/cateModel.js');
module.exports = {
  // 获取所有分类数据
  getCateList(req, res) {
    // 调用数据模块
    cateModel.getCateList((err, data) => {
      if (err) {
        res.json({
          code: 400,
          msg: '获取数据失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '获取数据成功',
          data
        })
      }
    })
  },
  // 实现分类数据的编辑
  editCate(req, res) {
    let obj = req.body
    cateModel.editCate(obj, (err) => {
      if (err) {
        res.json({
          code: 400,
          msg: '编辑失败'
        })
      } else {
        res.json({
          code: 200,
          msg: '编辑成功',
        })
      }
    })
  }
}