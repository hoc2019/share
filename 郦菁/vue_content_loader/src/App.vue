<!--
 * @Author: lijing
 * @Date: 2019-10-15 15:49:00
 * @LastEditors: lijing
 * @LastEditTime: 2019-11-20 16:05:40
 * @Description:app
 * @FilePath: /myapp/src/App.vue
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
