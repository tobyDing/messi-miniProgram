import { getPageObj, assign, isFunction, isObj } from '../utils/utils'

let queue = []

let defaultOptions = {
  visible: true,
  type: 'primary',
  msg: '',
  selector: '#ms-message',
  duration: 2500,
  cb: () => { }
}

let parseOptions = (options = {}) => {
  return isObj(options) ? options : { msg: options }
}

const MsMessage = options => {
  options = assign(defaultOptions, parseOptions(options))
  const pageObj = options.pageObj || getPageObj()
  const message = pageObj.selectComponent(options.selector)
  if (message) {
    const {
      duration,
      cb,
    } = options
    message._hide = (status = 'hide') => {
      message.setData({
        visible: false
      })
      isFunction(cb) && cb()
    }
    message.timer && clearTimeout(message.timer)
    message.timer = setTimeout(() => {
      message._hide()
    }, duration * 1)
    delete options.pageObj
    delete options.selector
    message.setData(options)
    queue.push(message)
  } else {
    console.warn(`id值为${options.selector}的ms-dialog组件不存在，请检查selector或者pageObj是否正确`)
  }
}

MsMessage.hide = () => {
  queue.forEach(message => {
    message._hide()
  })
  queue = []
}

MsMessage.success = options => {
  options = assign({
    type: 'success'
  }, parseOptions(options))
  return MsMessage(options)
}

MsMessage.danger = options => {
  options = assign({
    type: 'danger'
  }, parseOptions(options))
  return MsMessage(options)
}

MsMessage.warning = options => {
  options = assign({
    type: 'warning'
  }, parseOptions(options))
  return MsMessage(options)
}

export default MsMessage