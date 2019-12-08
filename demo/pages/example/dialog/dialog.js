
Page({
  data: {
    show: true,
    buttons: [{
      className: 'messi-btn__plain',
      text: '取消'
    },
    {
      className: 'messi-btn__primary',
      text: '确定'
    }]
  },
  onLoad: function (options) {

  },
  onConfirm(ev) {
    this.setData({
      show: false
    })
  },
  onClose(){
    console.log('onClose')
  }
})