$(function () {
  $.ajax({
    type: 'get',
    url: '/getPostList',
    data: {},
    dataType: 'json',
    success: function (res) {
      console.log(res);
      $('tbody').html(template('postListTemp', res))
    }
  })
})