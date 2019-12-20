const MaxConut = 3
const PageNum = 20
let listview = ''
Page({
  data: {
    userData: {
      page: 1,
      list: []
    }
  },
  onLoad() {
    listview = this.selectComponent('#ms-listview')
    listview.setDownStatus('loading')
    this.loadData().then(res => {
      if (res.list.length < PageNum) {
        listview.setDownStatus('noMoreData')
      } else {
        listview.setDownStatus()
      }
      this.setData({
        userData: res
      })
    })
  },
  loadData: function (page = 1) {
    console.log('page', page)
    return new Promise((resolve) => {
      setTimeout(() => {
        let res = {}
        let list = []
        if (page <= MaxConut) {
          list = Array.from({ length: PageNum }, (item, index) => {
            return {
              "id": `${page}-${index + 1}`,
              "name": `${page}-小刘${index + 1}`,
              "mobile": "15777420459",
              "brand": "申通快递",
              "address": `河北省邢台市清河县美丽花园${index + 1}号`,
            }
          })
          res = {
            page,
            count: MaxConut,
            list
          }
        } else {
          res = {
            page: page <= 1 ? page : --page,
            count: MaxConut,
            list: []
          }
        }
        resolve(res)
      }, 1000)
    })
  },
  onEmitUp() {
    this.loadData(1).then(res => {
      listview.setUpStatus()
      this.setData({
        userData: res
      })
    })
  },
  onEmitDown() {
    let { userData: { page, list } } = this.data;
    listview.setDownStatus('loading')
    this.loadData(++page).then(res => {
      if (res.list.length < PageNum) {
        listview.setDownStatus('noMoreData')
      } else {
        listview.setDownStatus()
      }
      res.list = list.concat(res.list)
      this.setData({
        userData: res
      })
    })
  }
})