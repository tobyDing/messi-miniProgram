import MsDialog from '../../../components/dialog/index';

Page({
  onTapSlideview2(ev) {
    let slideview = this.selectComponent('#ms-slideview2');
    MsDialog.alert({
      content: '确定要删除吗？',
      onButtonsTap: (ev) => {
        const { index } = ev
        if (index == 1) {
          slideview.close()
          MsDialog.close()
        }
      }
    })
  },
  onTapSlideview3(ev) {
    let slideview = this.selectComponent('#ms-slideview3');
    MsDialog.alert({
      content: '确定要关闭吗？',
      onButtonsTap: (ev) => {
        const { index } = ev
        if (index == 1) {
          slideview.close()
          MsDialog.close()
        }
      }
    })
  }
})