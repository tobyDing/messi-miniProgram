import MsPicker from '../../../components/picker/index'

Page({
  data: {
    columns: [
      ['中国', '美国', '俄罗斯', '英国', '德国', '日本', '韩国', '加拿大'],
    ],
    columns2: [
      ['中国', '美国', '俄罗斯', '英国', '德国', '日本', '韩国', '加拿大'],
    ],
    columns3: [
      ['中国', '美国', '俄罗斯', '英国', '德国', '日本', '韩国', '加拿大'],
      ['足球', '篮球', '排球', '兵乓球', '棒球', '桌球', '手球', '曲棍球']
    ],
    defualtValue2: ['俄罗斯'],
    defualtValue3: ['俄罗斯', '排球']
  },
  onShowPicker() {
    const { columns } = this.data
    MsPicker({
      columns,
      cb(action, ev) {
        console.log('cb', action, ev)
      }
    })
  },
  onShowPicker2() {
    const { columns2, defualtValue2 } = this.data
    MsPicker({
      columns: columns2,
      defualtValue: defualtValue2,
      cb(action, ev) {
        console.log('cb', action, ev)
      }
    })
  },
  onShowPicker3() {
    const { columns3, defualtValue3 } = this.data
    MsPicker({
      columns: columns3,
      defualtValue: defualtValue3,
      cb: (action, ev) => {
        console.log('cb', action, ev)
        if (action == 'onConfirm') {
          const { values } = ev;
          this.setData({
            defualtValue3: values
          })
        }
      }
    })
  }
})