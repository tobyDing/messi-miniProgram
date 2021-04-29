import MsActionsheet from '../../../components/actionsheet/index'

Page({
  data: {},
  onShowActionsheet() {
    MsActionsheet({
      actions: [
        { className: '', name: '选项一', action: 'one', },
        { className: '', name: '选项二', action: 'two', },
        { className: '', name: '选项三', action: 'three', },
      ],
      cb: (evname, data) => {
        console.log(evname, data)
      }
    })
  },
  onShowActionsheet2() {
    MsActionsheet({
      actions: [
        { className: '', name: '选项一', desc: '简单描述1', action: 'one', },
        { className: '', name: '选项二', desc: '简单描述2', action: 'two', },
        { className: '', name: '选项三', desc: '简单描述3', action: 'three', },
      ],
      cb: (evname, data) => {
        console.log(evname, data)
      }
    })
  },
  onShowActionsheet3() {
    MsActionsheet({
      position: 'center',
      showCancelGap: false,
      actions: [
        { className: '', name: '选项一', action: 'one', },
        { className: '', name: '选项二', action: 'two', },
        { className: '', name: '选项三', action: 'three', },
      ],
      cb: (evname, data) => {
        console.log(evname, data)
      }
    })
  }
})