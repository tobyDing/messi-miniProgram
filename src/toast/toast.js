Component({
  properties: {
    maskClickable: {
      type: Boolean,
      value: false
    },
    visible: {
      type: Boolean,
      value: true,
    },
    msg: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'tips'
    },
    icon: {
      type: String,
      value: ''
    }
  },
  data: {
    iconMap: {
      success: 'ms-success',
      error: 'ms-error',
      loading: 'ms-loading',
    }
  }
})