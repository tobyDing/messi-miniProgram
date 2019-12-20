/**
 * TodoList
 * * 本组件采用scroll-view+手势判断方案
 * * 另一种实现方案可采用：movable-area+movable-view方案
 */

const Distance = 80; //下拉加载区域阈值

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    mode: {//列表模式 up下拉刷新/down上拉加载/all全部
      type: String,
      value: 'all'
    },
    upStatus: {//下拉刷新状态 ''/drop下拉刷新/release释放刷新/loading加载中
      type: String,
      value: ''
    },
    downstatus: {//上拉加载状态 ''/loading加载中/noMoreData无内容
      type: String,
      value: ''
    },
    lowerThreshold: {//距离底部多远，触发上拉加载事件
      type: Number,
      value: 50
    },
    downLoadingIcon: {
      type: String,
      value: 'ms-loading'
    },
    downLoadingText: {
      type: String,
      value: '加载中...'
    },
    noMoreData: {
      type: String,
      value: '没有更多数据了'
    },
  },
  data: {
    upHeight: 0,//下拉加载区域高度
  },
  ready() {
    this.scrollTop = 0
    // this.setUpStatus('drop')
  },
  methods: {
    onScroll(ev) {
      // console.log('ev', ev)
      const { scrollTop } = ev.detail
      // console.log('scrollTop', scrollTop)
      this.scrollTop = scrollTop
      this.triggerEvent('onScroll', ev)
    },
    onDragStart(ev) {
      // console.log('onDragStart.ev', ev)
      const { touches } = ev
      const touch = touches[0]
      this.pageX = touch.pageX
      this.pageY = touch.pageY
    },
    onDragMove(ev) {
      // console.log('onDragMove.ev', ev)
      const { touches } = ev
      const touch = touches[0]
      let offsetX = touch.pageX - this.pageX
      let offsetY = touch.pageY - this.pageY
      let absOffsetX = Math.abs(offsetX)
      let absOffsetY = Math.abs(offsetY)
      let { upHeight, upStatus } = this.data;
      // console.log('this.scrollTop', this.scrollTop)
      if (absOffsetY - absOffsetX > 0 && offsetY > 0 && this.scrollTop <= 0) {//纵向且向下滑动 且 scroll-view正在顶部
        console.log('absOffsetY', absOffsetY)
        if (absOffsetY <= Distance) {//第一阶段 下拉刷新
          upHeight = absOffsetY
          upStatus = 'drop'
        } else if (Distance < absOffsetY && absOffsetY <= Distance * 2) {//第二阶段 释放刷新
          upHeight = Distance + (absOffsetY - Distance) * 0.5
          upStatus = 'release'
        } else {
          upHeight = Distance + Distance * 0.5 + (absOffsetY - Distance * 2) * 0.2
        }
        upHeight = upHeight * 0.7 //移动距离衰减
        this.setData({
          upHeight,
          upStatus
        })
      }
    },
    onDragEnd() {
      if (this.scrollTop <= 0) {//scroll-view正在顶部
        let { upHeight, upStatus } = this.data;
        if (upStatus == 'release') {
          upHeight = Distance
          upStatus = 'loading'
          this.onEmitUp()
        } else {
          upHeight = 0
          upStatus = 'release'
        }
        this.setData({
          upHeight,
          upStatus
        })
      }
    },
    onEmitUp(ev) {
      /**
       * 下拉刷新
       */
      this.triggerEvent('onEmitUp')
    },
    setUpStatus(status = '') {
      /**
       * 设置下拉刷新状态
       */
      this.setData({
        upStatus: status
      })
    },
    onEmitDown(ev) {
      /**
       * 上拉加载事件
       */
      this.triggerEvent('onEmitDown')
    },
    setDownStatus(status = '') {
      /**
       * 设置上拉加载区域的状态
       */
      this.setData({
        downstatus: status
      })
    },
  }
})
