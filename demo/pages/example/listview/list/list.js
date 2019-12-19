
const MaxConut = 3
const PageNum = 10
Page({
  data: {
    userData: {
      page: 1,
      list: []
    }
  },
  onLoad() {
    this.loadData().then((res) => {
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
            page,
            count: MaxConut,
            list: []
          }
        }
        resolve(res)
      }, 1000)
    })
  },
  onEmitDown() {
    let { userData: { page, list } } = this.data;
    this.loadData(++page).then((res) => {
      if (res.list.length >= PageNum) {
        res.list = list.concat(res.list)
        this.setData({
          userData: res
        })
      }
    })
  }
})