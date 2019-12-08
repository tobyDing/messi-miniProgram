
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
    show: {
      type: Boolean,
      value: false
    },
    buttons: {
      type: Array,
      value: []
    }
  },
  data: {},
  ready() {},
  methods: {
    onClose() {
      const { maskClosable } = this.data;
      if (!maskClosable) {
        return;
      }
      this.setData({
        show: false
      })
      this.triggerEvent('close', {}, {})
    },
    buttonTap(ev) {
      const { dataset: { index } } = ev.currentTarget;
      this.triggerEvent('buttontap', {
        index,
        item: this.data.buttons[index]
      }, {})
    },
    stopEvent() { }
  }
})
