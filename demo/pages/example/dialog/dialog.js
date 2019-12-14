import MsDialog from '../../../components/dialog/index'

Page({
  data: {
    ConfirmDialogObj: {
      buttons: [
        { className: 'messi-btn_primary', text: '确认', action: 'cancel' }
      ]
    }
  },
  onLoad() { },
  onTipsDialog() {
    MsDialog.alert({
      title: '提示弹窗',
      content: '这是提示弹窗',
      onButtonsTap(ev) {
        console.log('ev', ev)
      },
      onClose() {
        console.log('onClose')
      }
    })
  },
  onConfirmDialog() {
    MsDialog.alert({
      content: '这是确认弹窗',
      buttons: [
        { className: 'messi-btn_primary', text: '知道了', action: 'cancel' }
      ],
      onButtonsTap(ev) {
        console.log('ev', ev)
      }
    })
  },
  onComponentTap(ev) {
    this.setData({
      visible: true
    })
  }
})