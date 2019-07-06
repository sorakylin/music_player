/**
 * 往dom元素中添加指定class
 * @param {*} el    element 
 * @param {*} className  class name
 */
export function addClass(el, className) {
  if (hasClass(el, className)) return

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/**
 *  判断指定的dom元素是否拥有指定的class name
 * @param {*} el    element 
 * @param {*} className  class name
 */
export function hasClass(el, className) {
  let regex = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return regex.test(el.className)
}
