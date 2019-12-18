import { isArray, isEmpty, isFunction } from '../utils/utils'
/**
 * 建议使用js方式调用，否则可能存在数据不重置导致的问题
 */
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    extClass: {
      type: String,
      value: ''
    },
    mask: {
      type: Boolean,
      value: true
    },
    maskClosble: {
      type: Boolean,
      value: true
    },
    defualtValue: { //默认选中值
      type: Array,
      value: [],
      observer: function (defualtValue) {
        let defualtValueIndex = this.getIndexs(defualtValue)
        this.setData({
          defualtValueIndex,
          resIndexs: defualtValueIndex
        })
      }
    },
    columns: {
      type: Array,
      value: []
    },
    rowHeight: { //每行行高
      type: Number,
      value: 45
    },
    count: { //可见个数,最好都是大于3的奇数
      type: Number,
      value: 5
    },
    title: {
      type: String,
      value: ''
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }
  },
  data: {
    defualtValueIndex: [],//默认选中值对应的索引
    resIndexs: [],//选中值(索引) 例如：[1,2]
  },
  methods: {
    _close() {
      this.setData({
        visible: false,
        resIndexs: []
      })
    },
    getIndexs(values) {
      /**
       * 获取所有列选中项对应索引
       * @param values 所有列选中项的值 例如：['选中项1','选中项2']
       * @returns indexs 所有列选中项的值对应的索引 例如：[2,2]
       */
      const { columns = [] } = this.data
      let indexs = [];
      if (isArray(values) && !isEmpty(values) && isArray(columns) && !isEmpty(columns)) {
        columns.map((item, index) => {
          let indexsItem = item.findIndex(iitem => iitem == values[index])
          indexsItem = (!indexsItem || indexsItem) < 0 ? 0 : indexsItem
          indexs.push(indexsItem)
        })
      }
      if (indexs.length <= 0) {
        indexs = Array.from(columns, () => 0)
      }
      return indexs;
    },
    getValues(indexs) {
      /**
       * 获取所有列选中项的值
       * @param indexs 所有列选中项的值对应的索引 例如：[2,2]
       * @returns values 所有列选中项的值 例如：['选中项1','选中项2']
       */
      const { columns = [] } = this.data
      let values = []
      if (isArray(indexs) && !isEmpty(indexs) && isArray(columns) && !isEmpty(columns)) {
        columns.map((item, index) => {
          let valuesItem = item[indexs[index]] || '';
          values.push(valuesItem)
        })
      }
      return values
    },
    onChange(ev) {
      /**
       * 滚动选择
       */
      const { value } = ev.detail
      this.setData({
        resIndexs: value
      })
      let detail = {
        indexs: value,
        values: this.getValues(value)
      }
      this.triggerEvent('onChange', detail)
      isFunction(this.data.onChange) && this.data.onChange(detail)
      isFunction(this.data.cb) && this.data.cb('onChange', detail)
    },
    onConfirm() {
      /**
       * 确认选择
       */
      const { resIndexs = [], defualtValueIndex } = this.data
      let indexs = resIndexs.length > 0 ? resIndexs : defualtValueIndex
      let values = this.getValues(indexs)
      let detail = {
        indexs,
        values
      }
      this.triggerEvent('onConfirm', detail)
      isFunction(this.data.onConfirm) && this.data.onConfirm(detail)
      isFunction(this.data.cb) && this.data.cb('onConfirm', detail)
      this._close()
    },
    onCancel(ev) {
      /**
       * 取消选择
       */
      const { dataset = {} } = ev.currentTarget || {}
      const { key = '' } = dataset || {}
      const { maskClosble } = this.data
      if (key == 'mask' && !maskClosble) {
        return;
      }
      this.triggerEvent('onCancel')
      isFunction(this.data.onCancel) && this.data.onCancel()
      isFunction(this.data.cb) && this.data.cb('onCancel', {})
      this._close()
    },
  }
})