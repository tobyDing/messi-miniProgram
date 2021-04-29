
const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30));
const getClassNames = (name) => {
  return {
    'enter': `ms-${name}-enter ms-${name}-enter-active ms-transition-enter-class ms-transition-enter-active-class`,
    'enter-to': `ms-${name}-enter-to ms-${name}-enter-active ms-transition-enter-to-class ms-transition-enter-active-class`,
    'leave': `ms-${name}-leave ms-${name}-leave-active ms-transition-leave-class ms-transition-leave-active-class`,
    'leave-to': `ms-${name}-leave-to ms-${name}-leave-active ms-transition-leave-to-class ms-transition-leave-active-class`,
  }
}

Component({
  externalClasses: [

  ],
  properties: {
    show: {
      type: Boolean,
      value: true,
      observer: 'observerShow'
    },
    duration: {
      type: null,
      value: '300'
    },
    name: {
      type: String,
      value: 'fade'
    }
  },

  data: {
    inited: false,
    display: false
  },

  attached() {
    if (this.data.show) {
      this.enter()
    }
  },

  methods: {
    observerShow(value) {
      value ? this.enter() : this.leave()
    },
    enter() {
      const { duration, name } = this.data
      const currentDuration = duration
      const classes = getClassNames(name)
      this.status = 'enter'
      Promise.resolve()
        .then(nextTick)
        .then(() => {
          this.setData({
            'classes': classes['enter'],
            'display': true,
            'inited': true
          })
        })
        .then(nextTick)
        .then(() => {
          this.transitionsEnd = false;
          this.setData({
            'classes': classes['enter-to'],
            currentDuration
          })
        })
    },
    leave() {
      const { duration, name } = this.data
      const currentDuration = duration
      const classes = getClassNames(name)
      this.status = 'leave'
      Promise.resolve()
        .then(nextTick)
        .then(() => {
          this.setData({
            'classes': classes['leave'],
            currentDuration
          })
        })
        .then(nextTick)
        .then(() => {
          this.transitionsEnd = false
          setTimeout(() => {
            this.onTransitionEnd()
          }, duration)
          this.setData({
            'classes': classes['leave-to'],
          })
        })
    },
    onTransitionEnd(ev) {
      if (this.transitionsEnd) return
      this.transitionsEnd = true
      const { show, display } = this.data
      if (!show && display) {
        this.setData({
          display: false
        })
      }
    }
  }
})
