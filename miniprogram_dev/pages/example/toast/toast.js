import MsToast from '../../../components/toast/index'

Page({
  data: {
    visible: true
  },
  onLoad() { },
  onShowToast() {
    // MsToast({
    //   msg: '这是简单文字提示',
    //   cb() {
    //     console.log('cb关闭了')
    //   }
    // })
    MsToast('这是简单文字提示')
  },
  onShowToast2() {
    MsToast({
      msg: '这是长文字提示，长文提示会自动换行，但是通常我们不建议使用toast做长文字提示，这会给用户产生视觉疲惫'
    })
  },
  onShowLoading() {
    // MsToast.loading()
    MsToast.loading('请稍后...')
    // setTimeout(() => {
    //   MsToast.hide()
    // }, 5000);
  },
  onShowToastSuccess() {
    // MsToast.success({
    //   msg: '成功提示'
    // })
    MsToast.success('成功提示')
  },
  onShowToastError() {
    // MsToast.error({
    //   msg: '失败提示'
    // })
    MsToast.error('失败提示')
  },
  onShowToastIcon() {
    MsToast({
      icon: 'ms-love',
      msg: '自定义图标'
    })
  }
})