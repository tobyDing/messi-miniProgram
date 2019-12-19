/**
 * TodoList
 * * 后续增加滚动显示
 */
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  properties: {
    visible: {
      type: Boolean,
      value: true
    },
    extClass: {
      type: String,
      value: ''
    },
    leftIcon: {
      type: String,
      value: 'ms-notice'
    },
    rightIcon: {
      type: String,
      value: 'ms-close'
    },
    multipleRows: {
      type: Boolean,
      value: true
    }
  },
  data: {},
  methods: {
    onClose() {
      const { rightIcon } = this.data;
      if (rightIcon === 'ms-close') {
        this.setData({
          visible: false
        })
      }
    }
  }
})
