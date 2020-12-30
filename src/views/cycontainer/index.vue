<!--
 * @Author: your name
 * @Date: 2020-12-29 13:18:50
 * @LastEditTime: 2020-12-30 09:54:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\index.vue
-->
<template>
  <div class="home">
     <ul class = "container">
         <li class="left">
             <left />
         </li>
         <li class="center">
             <div :style="{height: height + 'px'}" class="outcontainer">
                <div id="cytoscapeId" class="cycontainer"></div>
             </div>
         </li>
     </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import draw from "./draw"
import tools from '@/utils/tools'
import left from './left.vue'
@Component({
  components: {
      left
  },
})
export default class Container extends Vue {
    height:number = tools.getPageHeight();
    mounted() {
        
        this.height = tools.getPageHeight();
        setTimeout(()=>{
            draw.init()
        }, 0)
        
    }
}
</script>

<style scoped lang="scss">
@import "./index.scss"
</style>
