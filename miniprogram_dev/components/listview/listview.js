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
    isLockUp: false,//锁定下拉刷新
    isLockDown: false,//锁住上拉加载
  },
  ready() {
    this.scrollTop = 0
  },
  methods: {
    onScroll(ev) {
      const { scrollTop } = ev.detail
      this.scrollTop = scrollTop
      this.triggerEvent('onScroll', ev)
    },
    onDragStart(ev) {
      let { upStatus, isLockUp } = this.data
      if (upStatus == 'loading' && isLockUp) {
        return;
      }
      const { touches } = ev
      const touch = touches[0]
      this.pageX = touch.pageX
      this.pageY = touch.pageY
    },
    onDragMove(ev) {
      const { touches } = ev
      const touch = touches[0]
      let offsetX = touch.pageX - this.pageX
      let offsetY = touch.pageY - this.pageY
      let absOffsetX = Math.abs(offsetX)
      let absOffsetY = Math.abs(offsetY)
      let { upHeight, upStatus, isLockUp } = this.data
      if (upStatus == 'loading' && isLockUp) {
        return;
      }
      if (absOffsetY - absOffsetX > 0 && offsetY > 0 && this.scrollTop <= 0) {//纵向且向下滑动 且 scroll-view正在顶部
        if (absOffsetY < Distance * 0.2) {
          return
        }
        if (absOffsetY <= Distance) {//第一阶段 下拉刷新
          upHeight = absOffsetY
          upStatus = 'drop'
        } else if (Distance < absOffsetY) {//第二阶段 释放刷新
          if (absOffsetY <= Distance * 2) {
            upHeight = Distance + (absOffsetY - Distance) * 0.5
          } else {
            upHeight = Distance + Distance * 0.5 + (absOffsetY - Distance * 2) * 0.2
          }
          upStatus = 'release'
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
        let { upHeight, upStatus, isLockUp } = this.data;
        if (upStatus == 'loading' && isLockUp) {
          return
        }
        if (upStatus == 'release') {
          upHeight = Distance
          upStatus = 'loading'
          this.onEmitUp()
        } else {
          upHeight = 0
          upStatus = ''
        }
        this.setData({
          upHeight,
          upStatus
        })
      }
    },
    lock(direction) {
      /**
       * 锁定
       */
      let { isLockUp, isLockDown } = this.data
      switch (direction) {
        case 'up':
          isLockUp = true
        case 'down':
          isLockDown = true
        default:
          isLockUp = true
          isLockDown = true
      }
      this.setData({
        isLockUp,
        isLockDown
      })
    },
    unlock(direction) {
      /**
       * 解锁
       */
      let { isLockUp, isLockDown } = this.data
      switch (direction) {
        case 'up':
          isLockUp = false
        case 'down':
          isLockDown = false
        default:
          isLockUp = false
          isLockDown = false
      }
      this.setData({
        isLockUp,
        isLockDown
      })
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
      const { downstatus, isLockDown } = this.data
      if (downstatus == 'loading' && isLockDown) {
        return
      }
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
