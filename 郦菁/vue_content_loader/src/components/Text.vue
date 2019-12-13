<!--
 * @Author: lijing
 * @Date: 2019-10-15 15:49:00
 * @LastEditors: lijing
 * @LastEditTime: 2019-11-29 14:03:36
 * @Description: demo
 * @FilePath: /myapp/src/components/Loader.vue
 -->
<template>
  <div class="text" :style="rule" id="text">{{text}}</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      text:
        'Panda ABC是一个在线少儿英语教育平台，致力于为4—12岁儿童提供英语听说读写教育，通过引进美国本土教材，使用短时高频学习法，每周三课时每次30分钟，并有固定教师、班级、同伴进行教学，以及外教互动教学，潘哒旗下拥有1vN英语小班课Air Course（爱课）、和1v4在线北美外教小班课Panda ABC两款App产品。',
      rule: {}
    };
  },
  mounted () {
    this.getStyle();
  },
  methods: {
    getStyle () {
      let text = document.getElementById('text');
      let textStyle = window.getComputedStyle(text);

      let fontSize = textStyle.getPropertyValue('font-size');
      let lineHeight = textStyle.getPropertyValue('line-height');
      console.log(fontSize, lineHeight);

      const textHeightRatio =
        parseFloat(fontSize, 10) / parseFloat(lineHeight, 10);
      const firstColorPoint = (((1 - textHeightRatio) / 2) * 100).toFixed(2);
      const secondColorPoint = (
        ((1 - textHeightRatio) / 2 + textHeightRatio) *
        100
      ).toFixed(2);
      console.log(firstColorPoint, secondColorPoint);

      this.rule = {
        backgroundImage: `linear-gradient(
                transparent ${firstColorPoint}%, #fb3 0%,
                 #58a ${secondColorPoint}%, transparent 0%)`,
        backgroundSize: `auto ${lineHeight}`,
        backgroundOrigin: 'content-box', // 背景图像相对于内容框来定位。
        backgroundClip: 'content-box', // 背景被裁剪到内容框。
        // backgroundColor: 'transparent',
        // color: 'transparent',
        backgroundRepeat: 'repeat-y'
      };
    }
  }
};
</script>
<style scoped>
.text {
  width: 700px;
  text-align: left;
  font-size: 32px;
  line-height: 64px;
}
</style>
