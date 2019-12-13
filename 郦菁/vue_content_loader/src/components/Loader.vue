<!--
 * @Author: lijing
 * @Date: 2019-10-15 15:49:00
 * @LastEditors: lijing
 * @LastEditTime: 2019-12-12 18:41:11
 * @Description: demo
 * @FilePath: /myapp/src/components/Loader.vue
 -->
<template>
  <div>
    <nav>
      <ul>
        <li>
          <a :class="{active : Index == 1}" @click="changeNav(1)">ContentLoader</a>
        </li>
        <li>
          <a :class="{active : Index == 2}" @click="changeNav(2)">FacebookLoader</a>
        </li>
        <li>
          <a :class="{active : Index == 3}" @click="changeNav(3)">CodeLoader</a>
        </li>
        <li>
          <a :class="{active : Index == 4}" @click="changeNav(4)">BulletListLoader</a>
        </li>
        <li>
          <a :class="{active : Index == 5}" @click="changeNav(5)">InstagramLoader</a>
        </li>
        <li>
          <a :class="{active : Index == 6}" @click="changeNav(6)">CodeLoader</a>
        </li>
      </ul>
    </nav>
    <div>
      <div v-if="Index == 1">
        <ContentLoader>
          <rect x="0" y="0" rx="25" ry="25" width="250" height="250" />
          <rect x="50" y="30" rx="3" ry="3" width="220" height="10" />
          <rect x="20" y="40" rx="3" ry="3" width="17" height="10" />
          <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
          <rect x="20" y="80" rx="3" ry="3" width="20" height="10" />
          <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
        </ContentLoader>
      </div>
      <div v-if="Index == 2">
        <FacebookLoader></FacebookLoader>
      </div>
      <div v-if="Index == 3">
        <CodeLoader></CodeLoader>
      </div>
      <div v-if="Index == 4">
        <BulletListLoader></BulletListLoader>
      </div>
      <div v-if="Index == 5">
        <InstagramLoader></InstagramLoader>
      </div>
      <div v-if="Index == 6">
        <ListLoader></ListLoader>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ContentLoader,
  FacebookLoader,
  CodeLoader,
  BulletListLoader,
  InstagramLoader,
  ListLoader
} from "vue-content-loader";
export default {
  components: {
    ContentLoader,
    FacebookLoader,
    CodeLoader,
    BulletListLoader,
    InstagramLoader,
    ListLoader
  },
  data() {
    return {
      Index: 1
    };
  },
  methods: {
    // 导航切换
    changeNav(index) {
      console.log(index);
      this.Index = index;
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
