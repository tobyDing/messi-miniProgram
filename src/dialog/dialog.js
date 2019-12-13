// 组件的js调用方式
// 组件的命名规范
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  properties: {
    name: {
      type: String,
      value: 'dialog'
    },
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
  data: {},
  lifetimes: {
    attached() {
      if (this.data.name == 'system') {
        const pages = getCurrentPages();
        const pageObj = pages[pages.length - 1];
        pageObj.$MsDialog = this.$MsDialog.bind(this);
      }
    },
  },
  methods: {
    $MsDialog(config) {
      let _this = this;
      let o = new Object();
      o.init = () => {
        _this.setData(config)
      }
      o.close = () => {
        _this.setData({
          visible: false
        })
      }
      o.change=()=>{
        _this.setData({
          content:'4949404'
        })
      }
      o.init();
      return o;
    },
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
