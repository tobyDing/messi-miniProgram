
const getPageObj = () => {
  /**
   * 获取页面对象
   */
  const pages = getCurrentPages()
  const pageObj = pages[pages.length - 1]
  return pageObj
}

const assign = (...arg) => {
  return Object.assign({}, ...arg)
}

const isFunction = (fn) => {
  /**
   * 判断是否为函数
   */
  if (fn && typeof fn == 'function') {
    return true
  } else {
    return false
  }
}

export {
  getPageObj,
  isFunction,
  assign,
}