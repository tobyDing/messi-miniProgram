import { getPageObj } from '../utils/utils'

let queue = [];
const MsDialog = options => {
  options = Object.assign({
    selector: '#ms-dialog',
    visible: true
  }, options);
  return new Promise((resolve, reject) => {
    const pageObj = options.pageObj || getPageObj()
    const dialog = pageObj.selectComponent(options.selector)
    delete options.pageObj
    delete options.selector
    if (dialog) {
      const data = Object.assign({
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