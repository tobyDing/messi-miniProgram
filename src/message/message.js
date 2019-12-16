Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'primary'
    },
    msg: {
      type: String,
      value: ''
    }
  },
  data: {
    typeMap: {
      primary: 'messi-message_primary',
      success: 'messi-message_success',
      danger: 'messi-message_danger',
      warning: 'messi-message_warning',
    }
  }
})
