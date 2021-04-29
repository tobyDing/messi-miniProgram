import { getPageObj, assign, isFunction, isObj } from '../utils/utils'

let queue = []

// 需要将组件全部特性写上默认值，否则有bug(因为始终采用同一个id的组件)
let defaultOptions = {
  visible: true,
  type: 'tips',
  msg: '',
  maskClickable: false,
  icon: '',
  selector: '#ms-toast',
  duration: 2500,
  cb: () => { },
}

let parseOptions = (options = {}) => {
  return isObj(options) ? options : { msg: options }
}

const MsToast = options => {
  options = assign(defaultOptions, parseOptions(options))
  const pageObj = options.pageObj || getPageObj()
  const toast = pageObj.selectComponent(options.selector)
  return new Promise((resolve, reject) => {
    if (toast) {
      const {
        type,
        duration,
        cb
      } = options
      toast._hide = (status = 'hide') => {
        toast.setData({
          visible: false
        })
        isFunction(cb) && cb(status)
        resolve(status)
      }
      toast.timer && clearTimeout(toast.timer)
      toast.timer = setTimeout(() => {
        toast._hide()
      }, (type === 'loading' && duration < 0) ? 10000000 : duration * 1)
      delete options.pageObj
      delete options.selector
      toast.setData(options)
      queue.push(toast)
    } else {
      console.warn(`id值为${options.selector}的ms-toast组件不存在，请检查selector或者pageObj是否正确`)
    }
  })
}

MsToast.hide = () => {
  queue.forEach(toast => {
    toast._hide()
  })
  queue = []
}

MsToast.loading = options => {
  options = assign({
    type: 'loading',
    duration: -1
  }, parseOptions(options))
  return MsToast(options)
}

MsToast.success = options => {
  options = assign({
    type: 'success'
  }, parseOptions(options))
  return MsToast(options)
}

MsToast.error = options => {
  options = assign({
    type: 'error'
  }, parseOptions(options))
  return MsToast(options)
}

export default MsToast;