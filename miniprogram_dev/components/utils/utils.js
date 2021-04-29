
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

const isFunction = fn => {
  /**
   * 判断是否为函数
   */
  if (fn && typeof fn == 'function') {
    return true
  }
  return false
}

const isObj = obj => {
  /**
   * 判断是否为对象
   */
  if (obj && Object.prototype.toString.call(obj) === '[object Object]') {
    return true
  }
  return false
}

const isArray = arr => {
  /**
   * 判断是否为数组
   */
  if (arr && Array.isArray(arr)) {
    return true
  }
  return false
}

const isEmpty = data => {
  /**
   * 判断数组或对象是否为空
   */
  if (isObj(data)) {
    data = Object.keys(data)
  }
  if (isArray(data) && data.length > 0) {
    return false
  }
  return true
}

export {
  getPageObj,
  assign,
  isFunction,
  isObj,
  isArray,
  isEmpty,
}