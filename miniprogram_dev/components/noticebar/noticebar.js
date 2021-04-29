
Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    leftIcon: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    background: {
      type: String,
      value: ''
    },
    wrapable: {
      type: Boolean,
      value: false
    },
    scrollable: {
      type: Boolean,
      value: false
    },
    speed: {
      type: String,
      value: '12'
    },
    closeable: {
      type: Boolean,
      value: false
    }
  },
  data: {
    show: true
  },
  methods: {
    onClose() {
      this.setData({
        show: false
      })
    }
  }
})
