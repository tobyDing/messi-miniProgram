import MsMessage from '../../../components/message/index'

Page({
  onShowMessage() {
    MsMessage({
      msg: '这是主要消息通知'
    })
    // MsMessage('这是主要消息通知')
  },
  onShowMessageSuccess() {
    // MsMessage.success({
    //   msg: '这里是成功消息通知'
    // })
    MsMessage.success('这里是成功消息通知')
  },
  onShowMessageDanger() {
    // MsMessage.danger({
    //   msg: '这里是危险消息通知'
    // })
    MsMessage.danger('这里是危险消息通知')
  },
  onShowMessageWarning() {
    // MsMessage.warning({
    //   msg: '这里是警告消息通知'
    // })
    MsMessage.warning('这里是警告消息通知')
  }
})