Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
    },
    type: {
      type: String,
      value: 'tips'
    },
    msg: {
      type: String,
      value: ''
    },
    maskClickable: {
      type: Boolean,
      value: false
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