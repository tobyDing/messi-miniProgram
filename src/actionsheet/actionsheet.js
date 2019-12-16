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
    width: {
      type: String,
      value: ''
    },
    position: {
      type: String,
      value: 'bottom'
    },
    mask: {
      type: Boolean,
      value: true
    },
    maskClosble: {
      type: Boolean,
      value: true
    },
    actions: {
      type: Array,
      value: []
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    showCancelGap: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
    }
  },
  data: {},
  methods: {
    _close() {
      this.setData({
        visible: false
      })
      this.triggerEvent('onClose')
      this.data.cb && this.data.cb('onClose')
    },
    onClose() {
      if (!this.data.maskClosble) {
        return
      }
      this._close()
    },
    onSelect(ev) {
      const { dataset } = ev.currentTarget || {}
      const { index, action } = dataset || {}
      const item = this.data.actions || {}
      this.triggerEvent('onSelect', { index, action })
      this.data.cb && this.data.cb('onSelect', { index, action })
      if (!item.disClosbale) {
        this._close()
      }
    },
    onCancel() {
      this._close()
    }
  }
})
