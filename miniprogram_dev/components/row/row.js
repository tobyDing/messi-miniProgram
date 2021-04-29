const ColKey = '../col/col'

Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  relations: {
    [ColKey]: {
      type: 'descendant',
      linked(target) {
        target && target.setGutter && target.setGutter(this.data.gutter)
      }
    }
  },
  properties: {
    gutter: {
      type: String,
      value: '',
      observer: 'setGutter'
    }
  },
  data: {},
  ready(){
    this.setGutter()
  },
  methods: {
    setGutter() {
      const { gutter } = this.data;
      if (gutter) {
        this.getRelationNodes(ColKey).forEach(target => {
          target && target.setGutter && target.setGutter(gutter)
        });
      }
    }
  }
})
