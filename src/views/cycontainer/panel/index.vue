<!--
 * @Author: your name
 * @Date: 2021-01-04 17:43:22
 * @LastEditTime: 2021-01-04 17:47:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\panel\index.vue
-->
<template>
  <div>
      <cxtapLine />
      <cxtapNode />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import cxtapLine from './cxtapLine.vue'
import cxtapNode from './cxtapNode.vue'
@Component({
  components: {
      cxtapLine,
      cxtapNode
  },
})
export default class Container extends Vue {
   
}
</script>

<style scoped lang="scss">

</style>



