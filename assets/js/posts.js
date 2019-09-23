$(function () {
  var pageSize = 2,
    pageNum = 2
    // pageSize:每页显示的记录数
    // pageNum:当前页码
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
      $('tbody').html(template('postListTemp', res))
    }
  })
})