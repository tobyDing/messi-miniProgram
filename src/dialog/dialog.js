Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    mask: {
      type: Boolean,
      value: true
    },
    maskClosable: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: '温馨提示'
    },
    visible: {
      type: Boolean,
      value: false
    },
    buttons: {
      type: Array,
      value: [
        { className: 'messi-btn_second', text: '取消', action: 'cancel' },
        { className: 'messi-btn_primary', text: '确定' }
      ]
    }
  },
  data: {},
  ready() { },
  methods: {
    onClose() {
      const { maskClosable } = this.data;
      if (!maskClosable) {
        return;
      }
      this.setData({
        visible: false
      })
      this.triggerEvent('close', {}, {})
    },
    buttonTap(ev) {
      const { dataset: { index, action = 'normal' } } = ev.currentTarget;
      if (action == 'cancel') {
        this.onClose()
      }
      this.triggerEvent('buttontap', {
        index,
        item: this.data.buttons[index],
        ev: ev || {}
      }, {})
    },
    stopEvent() { }
  }
})
