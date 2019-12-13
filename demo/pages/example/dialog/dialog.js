
Page({
  data: {
    ConfirmDialogObj: {
      buttons: [
        { className: 'messi-btn_primary', text: '确认', action: 'cancel' }
      ]
    }
  },
  onLoad(){
    // console.log(this.$MsDialog)
    this.$MsDialog({
      visible:true,
      content:'这是基于JS调用的对话框组件'
    })
  },
  onTap(ev) {
    const { dataset: { type } } = ev.currentTarget || {};
    this.setData({
      [type]: true
    })
  }
})