
Component({
  externalClasses: ['custom-class', 'image-class'],
  properties: {
    src: {
      type: String,
      value: '',
      observer(newVal, oldVal) {
        newVal && this.setData({
          error: false,
          loading: true
        });
      }
    },
    width: {
      type: String,
      value: ''
    },
    height: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    layout: {
      type: String,
      value: 'defalut'
    },
    round: {
      type: Boolean,
      value: false
    },
    lazyLoad: {
      type: Boolean,
      value: false
    },
    showLoading: {
      type: Boolean,
      value: false
    },
    showError: {
      type: Boolean,
      value: true
    },
    customStyle: {
      type: String,
      value: ''
    }
  },

  data: {
    loading: false,
    error: false,
  },

  methods: {
    onImgLoad(ev) {
      this.setData({
        loading: false
      })
      this.triggerEvent('load', ev.detail)
    },
    onImgError(ev) {
      this.setData({
        loading: false,
        error: 'error'
      })
      this.triggerEvent('error', ev.detail)
    }
  }
})
