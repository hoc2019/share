//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: 'https://oss.aircourses.com/web/ac_write/ic_head_img.png',
      nickName: 'Lijing'
    },
    lists: [
      'Hello World',
      '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
    ],
    showSkeleton: true
  },
  onLoad: function () {
    const that = this;
    setTimeout(() => {
      that.setData({
        showSkeleton: false,
      })
    }, 2000)
  }
})
