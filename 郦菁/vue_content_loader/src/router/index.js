/*
 * @Author: lijing
 * @Date: 2019-10-15 15:49:00
 * @LastEditors: lijing
 * @LastEditTime: 2019-11-29 14:53:42
 * @Description:
 * @FilePath: /vue_content_loader/src/router/index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import Loader from '@/components/Loader';
import Text from '@/components/Text';
import Main from '@/components/Main';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/loader',
      name: 'loader',
      component: Loader
    },
    {
      path: '/text',
      name: 'text',
      component: Text
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
});
