import { getPageObj, assign, isFunction, isObj } from '../utils/utils'

let queue = []

let defaultOptions = {
  visible: true,
  extClass: '',
  width: '',
  position: 'bottom',
  mask: true,
  maskClosble: true,
  actions: [],
  showCancel: true,
  showCancelGap: true,
  cancelText: '取消',
  selector: '#ms-actionsheet',
  cb: () => { }
}

const MsActionsheet = options => {
  options = assign(defaultOptions, options)
  const pageObj = options.pageObj || getPageObj()
  const actionsheet = pageObj.selectComponent(options.selector)
  if (actionsheet) {
    delete options.pageObj
    delete options.selector
    actionsheet.setData(options)
  } else {
    console.warn(`id值为${options.selector}的ms-actionsheet组件不存在，请检查selector或者pageObj是否正确`)
  }
}

MsActionsheet.close = () => {
  queue.forEach(actionsheet => {
    actionsheet._close()
  })
  queue = []
}

export default MsActionsheet