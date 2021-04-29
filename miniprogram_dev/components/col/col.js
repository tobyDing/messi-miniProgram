Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  relations: {
    '../row/row': {
      type: 'ancestor'
    }
  },
  properties: {
    span: {
      type: String,
      value: ''
    },
    offset: {
      type: String,
      value: ''
    }
  },
  data: {
    style: ''
  },
  methods: {
    setGutter(gutter) {
      gutter = gutter * 1
      if (gutter) {
        let style = `padding-left:${gutter / 2}rpx;padding-right:${gutter / 2}rpx;`;
        this.setData({
          style
        })
      }
    }
  }
})
