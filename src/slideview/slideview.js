const threshold = 0.3;

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    leftWidth: {
      type: Number,
      value: 0
    },
    rightWidth: {
      type: Number,
      value: 0
    }
  },
  data: {
    slideStyle: ''
  },
  methods: {
    onDragStart(ev) {
      const { touches } = ev
      const touch = touches[0]
      const { clientX, clientY } = touch
      this.clientX = clientX
      this.clientY = clientY
      this.offsetX = 0
      this.offsetY = 0
      this.direction = ''
    },
    onDragMove(ev) {
      const { touches } = ev
      const touch = touches[0]
      const { clientX, clientY } = touch
      this.offsetX = clientX - this.clientX
      this.offsetY = clientY - this.clientY
      // 确定滑动方向
      if (Math.abs(this.offsetX) > Math.abs(this.offsetY)) {
        this.direction = 'horizontal'
      } else {
        this.direction = ''
      }
    },
    onDragEnd() {
      if (this.offsetX == 0) {
        return;
      }
      if (this.direction === 'horizontal') {
        this.slideviewMove(this.offsetX)
      }
    },
    slideviewMove(offset) {
      /**
       * offset 
       * =0 关闭视图
       * <0 向左滑动 显示右侧内容
       * >0 向右滑动 显示左侧内容
       */
      const { leftWidth, rightWidth } = this.data;
      let realOffset = 0
      let asbOffset = Math.abs(offset)
      // 去除无效滑动
      if ((offset < 0 && asbOffset < rightWidth * threshold) || (offset > 0 && asbOffset < leftWidth * threshold)) {
        console.log('阻止了')
        return
      }
      // 左滑
      if (offset < 0 && asbOffset > rightWidth * threshold) {
        realOffset = this.openDriction == 'left' ? 0 : -rightWidth
      }
      // 右滑
      if (offset > 0 && asbOffset > leftWidth * threshold) {
        realOffset = this.openDriction == 'right' ? 0 : leftWidth
      }
      // 获取滑动视图开启状态
      if (realOffset == 0) {
        this.openDriction = ''
      } else {
        this.openDriction = realOffset < 0 ? 'right' : 'left'
      }
      // 实施滑动
      let slideStyle = `
        transform: translate3d(${realOffset}rpx, 0, 0);
        -webkit-transform: translate3d(${realOffset}rpx, 0, 0);
      `
      this.setData({
        slideStyle
      })
    },
    close(){
      this.slideviewMove(0)
    }
  }
})
