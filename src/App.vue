<!--
 * @Author: your name
 * @Date: 2020-12-29 10:16:15
 * @LastEditTime: 2020-12-30 11:10:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
    <tipMsg />
    <allPanel />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import tipMsg from '@/components/tipMsg.vue'
import Config from '@/utils/config.ts';
import allPanel from '@/views/cycontainer/panel/index.vue'
@Component({
  components: {
    tipMsg,
    allPanel
  },
})
export default class Container extends Vue {
  mounted() {
   Config.vue = this 
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
