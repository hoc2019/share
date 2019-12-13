Component({
  properties: {
    bgcolor: {
      type: String,
      value: '#FFF'
    },
    selector: {
      type: String,
      value: 'skeleton'
    },
    loading: {
      type: String,
      value: 'spin'
    }
  },
  data: {
    loadingAni: ['spin', 'chiaroscuro'],
    systemInfo: {},
    skeletonRectLists: [],
    skeletonCircleLists: []
  },
  lifetimes: {
    attached: function () {
      console.log("attached")
      //默认的首屏宽高，防止内容闪现
      const systemInfo = wx.getSystemInfoSync();
      this.setData({
        systemInfo: {
          width: systemInfo.windowWidth,
          height: systemInfo.windowHeight
        },
        loading: this.data.loadingAni.includes(this.data.loading) ? this.data.loading : 'spin'
      })
    },
    ready: function () {
      console.log('ready')
      const that = this;

      //绘制背景
      wx.createSelectorQuery().selectAll(`.${this.data.selector}`).boundingClientRect().exec(function (res) {
        that.setData({
          'systemInfo.height': res[0][0].height + res[0][0].top
        })
      });

      //绘制矩形
      this.rectHandle();

      //绘制圆形
      this.radiusHandle();

    },
  },
  methods: {
    rectHandle: function () {
      const that = this;
      //绘制节点
      wx.createSelectorQuery().selectAll(`.${this.data.selector} >>> .${this.data.selector}-rect`).boundingClientRect().exec(function (res) {
        console.log(res);
        that.setData({
          skeletonRectLists: res[0]
        })
      });

    },
    radiusHandle: function () {
      const that = this;
      wx.createSelectorQuery().selectAll(`.${this.data.selector} >>> .${this.data.selector}-radius`).boundingClientRect().exec(function (res) {
        console.log(res);
        that.setData({
          skeletonCircleLists: res[0]
        })
      });
    },
  }
})