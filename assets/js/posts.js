$(function () {
  //  每页记录数     当前页码
  var pageSize = 2, pageNum = 2
  // pageSize:每页显示的记录数
  // pageNum:当前页码

  // 初始化
  function init() {
    $.ajax({
      type: 'get',
      url: '/getPostList',
      data: {
        pageSize,
        pageNum
      },
      dataType: 'json',
      success: function (res) {
        console.log(res);

        // 生成文章数据列表结构
        $('tbody').html(template('postListTemp', res.data))
      }
    })
  }
  init()

  function setPage(total) {
    $('.pagination').bootstrapPaginator({
      // 设置版本号
      bootstrapMajorVersion: 3,
      //显示第几页
      currentPage: pageNum,
      //总页数
      totalPages: total,
      //当单击操作按钮的时候，执行该函数，调用ajax渲染页面
      onPageClicked: function (event, originalEvent, type, page) {
        // page: 这就是当前你所需要的页码数据，我们只需要让ajax以这个页码数据作为标准再次发起请求获取数据生成动态结构
        // 修改全局页码
        pageNum=page
        // 重新获取数据生成动态结构
        init()
      }

    })

  }

  
})