Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    mode: {//列表模式 up下拉刷新;down上拉加载;all全部;
      type: String,
      value: 'all'
    },
    lowerThreshold: {//距离底部多远，触发上拉加载事件
      type: Number,
      value: 50
    },
  },
  data: {
    downstatus: '',//'loading'加载中;'nodata'无内容;
  },
  methods: {
    onEmitDown(ev) {
      /**
       * 上拉加载事件
       */
      // console.log('onEmitDown.ev', ev)
      // this.triggerEvent('onEmitDown')
    }
  }
})
