import { getPageObj, assign, isArray, isEmpty } from '../utils/utils'

/**
 * todoList
 * * 改变默认值组织方式:单独文件+单独默认值+组件默认值
 * * 探索及时加载和loading
 * * 封装自定义滑动组件
 */

let queue = []

const defaultOptions = {
  visible: true,
  extClass: '',
  mask: true,
  maskClosble: true,
  defualtValue: [],
  columns: [],
  rowHeight: 45,
  count: 5,
  title: '',
  cancelText: '取消',
  confirmText: '确定',
  selector: '#ms-picker',
  onChange: () => { },
  onConfirm: () => { },
  onCancel: () => { },
  cb: () => { }
}

const MsPicker = options => {
  options = assign(defaultOptions, options)
  const pageObj = options.pageObj || getPageObj()
  const picker = pageObj.selectComponent(options.selector)
  if (picker) {
    delete options.pageObj
    delete options.selector
    if (!isArray(options.columns)) {
      console.warn('ms-picker组件columns值不合法')
      return
    }
    if (!isArray(options.defualtValue)) {
      console.warn('ms-picker组件defualtValue值不合法')
      return
    }
    if (isEmpty(options.defualtValue)) {
      options.defualtValue = picker.createDefalutIndexs()
    }
    picker.setData(options)
    queue.push(picker)
  } else {
    console.warn(`id值为${options.selector}的ms-picker组件不存在，请检查selector或者pageObj是否正确`)
  }
}

MsPicker.close = () => {
  queue.forEach((picker) => {
    picker._close()
  })
  queue = []
}

export default MsPicker