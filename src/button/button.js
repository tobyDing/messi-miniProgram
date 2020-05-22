Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  properties: {
    type: {
      type: String,
      value: 'default'
    },
    plain: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    round: {
      type: Boolean,
      value: false
    },
    square: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
      value: ''
    },
    block: {
      type: Boolean,
      value: false
    },
    customStyle: {
      type: String,
      value: ''
    },
    width: {
      type: String,
      value: ''
    },
    height: {
      type: String,
      value: ''
    }
  },
  data: {},
  methods: {
    onClick(ev) {
      const { disabled } = this.data;
      if (disabled) return;
      this.triggerEvent('click')
    }
  }
})
