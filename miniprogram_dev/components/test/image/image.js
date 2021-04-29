
Component({
  externalClasses: ['custom-class'],
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
    }
  },

  data: {
    loading: false,
    error: false
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
        error
      })
      this.triggerEvent('error', ev.detail)
    }
  }
})
