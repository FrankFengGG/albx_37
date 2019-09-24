// 这个文件专门用于处理文件上传业务
const formidable = require('formidable');
module.exports = {
  uploadFile(req, res) {
    // 使用formidable实现文件上传
    // 1.创建文件上传对象
    let form = new formidable.IncomingForm()
    // 2.配置
    // 2.1 编码: 这个模块可以实现文件上传，也可以传递普通的键值对
    form.encoding = 'utf-8'
    // 2.2 设置文件上传之后的存储目录
    form.uploadDir = './uploads'
    // 2.3 设置是否保留扩展名
    form.keepExtensions = true
    // 3 实现文件上传
    // req: 请求报文，文件上传的数据就是在请求报文对象中
    // 回调函数：文件上传完成是出发的回调函数
    // err: 文件上传失败
    // fields：传递普通的键值对
    // files: 文件上传成功之后的相关信息
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.json({
          code: 400,
          msg: '文件上传失败',
        })
      } else {
        console.log(fields);
        console.log(files);
        res.json({
          code: 200,
          msg: '文件上传成功',
          // 将文件在服务器中的存储路径返回
          img: files.img.path
        })
      }
    })
  }
}