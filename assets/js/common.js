// 获取id
const itcast = {
  // 将参数字符串转换为对象
  // 如将：key=value&key=value >> {key:value}
  getParams(str) { //?id=4&name=jack >> {id:4, name:'jack}
    let obj = {}
    // 去除?
    str = str.substring(1) //id=4&name=jack
    // 第一次拆分字符串，按&拆分
    let temp = str.split('&') //['id=4','name=jack']
    // 循环遍历，拆分第二次
    temp.foreach(value => {
      let arr = value.split('=') //["id=4", 'name=jack']
      obj[arr[0]] = arr[1] //obj["id"]=4
    })
    return obj
  }
}