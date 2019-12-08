
Page({
  data: {
    list: [
      { name: '对话框', url: '/pages/example/dialog/dialog' }
    ]
  },
  onLoad() {

  },
  onTap(ev) {
    const { dataset: { index } } = ev.currentTarget;
    const { list } = this.data;
    const item = list[index];
    wx.navigateTo({
      url: item.url
    })
  }
})
