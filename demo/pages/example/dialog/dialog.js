
Page({
  data: {
    ConfirmDialogObj: {
      buttons: [
        { className: 'messi-btn_primary', text: '确认', action: 'cancel' }
      ]
    }
  },
  onTap(ev) {
    const { dataset: { type } } = ev.currentTarget || {};
    this.setData({
      [type]: true
    })
  }
})