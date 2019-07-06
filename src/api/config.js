
//这些都是qq音乐的接口需要参数,定义在这
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}
export const options = {
  param: 'jsonpCallback'
}
//qq音乐接口返回值为0表示调用成功
export const ERR_OK = 0
