import { getPageObj, assign } from '../utils/utils'

let queue = [];

let defaultOptions = {
  visible: true,
  extClass: '',
  mask: true,
  maskClosable: true,
  title: '温馨提示',
  content: '',
  buttons: [
    { className: 'messi-btn_second', text: '取消', action: 'cancel' },
    { className: 'messi-btn_primary', text: '确定' }
  ],
  selector: '#ms-dialog',
}

const MsDialog = options => {
  options = assign(defaultOptions, options);
  return new Promise((resolve, reject) => {
    const pageObj = options.pageObj || getPageObj()
    const dialog = pageObj.selectComponent(options.selector)
    delete options.pageObj
    delete options.selector
    if (dialog) {
      const data = assign({
        onButtonsTap: resolve
      }, options)
      dialog.setData(data)
      queue.push(dialog)
    } else {
      console.warn(`id值为${options.selector}的ms-dialog组件不存在，请检查selector或者pageObj是否正确`)
    }
  })
}

MsDialog.close = () => {
  queue.forEach(dialog => {
    dialog._close()
  })
  queue = []
}

MsDialog.alert = MsDialog

export default MsDialog