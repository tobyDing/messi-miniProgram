Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
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
    content: {
      type: String,
      value: ''
    },
    buttons: {
      type: Array,
      value: [
        { className: 'messi-btn_second', text: '取消', action: 'cancel' },
        { className: 'messi-btn_primary', text: '确定' }
      ]
    }
  },
  methods: {
    _close() {
      this.setData({
        visible: false
      })
      this.triggerEvent('onClose', {}, {})
      this.data.onClose && this.data.onClose()
    },
    onClose() {
      const { maskClosable } = this.data
      if (!maskClosable) {
        return
      }
      this._close()
    },
    onButtonsTap(ev) {
      const { dataset: { index, action = 'normal' } } = ev.currentTarget || {}
      const eventDetial = {
        index,
        item: this.data.buttons[index]
      }
      this.triggerEvent('onButtonsTap', eventDetial, {})
      this.data.onButtonsTap && this.data.onButtonsTap(eventDetial)
      if (action == 'cancel') {
        this._close()
      }
    },
    stopEvent() { }
  }
})
