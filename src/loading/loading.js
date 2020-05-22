Component({
  options: {
    addGlobalClass: true
  },

  externalClasses: [],

  properties: {
    type: {
      type: String,
      value: 'circular'//默认值circular半缺口/spinner类似微信
    },
    color: String,
    size: String,
    width: {
      type: String,
      value: '60rpx'
    },
    height: {
      type: String,
      value: '60rpx'
    }
  },

  data: {

  },

  methods: {

  }
})
