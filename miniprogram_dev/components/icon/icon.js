Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    name: {
      type: String,
      value: '',
      observer(val) {
        this.setData({
          isImageName: val.indexOf('/') != -1
        })
      }
    },
    prefix: {
      type: String,
      value: 'ms-'
    },
    size: {
      type: String,
      value: '',
    },
    color: {
      type: String,
      value: ''
    },
    customStyle: {
      type: String,
      value: ''
    }
  },
  data: {
    isImageName: false//是否为图片链接
  },
  methods: {
    onClick() {
      this.triggerEvent('click')
    }
  }
})
