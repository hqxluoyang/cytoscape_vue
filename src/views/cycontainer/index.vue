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
      <div style="position:absolute;color:red;right:300px;z-index:10000;background:#ccc;margin-top:10px;padding:5px" class="ctips">{{pname}}</div>
     <ul class = "container">
         <li class="left">
             <left />
         </li>
         <li class="right">
             <right />
         </li>
         
         <li class="center">
             <cyEditer />
             <div :style="{height: height + 'px'}" class="outcontainer">
                <div id="cytoscapeId" :style="{background: bgcolor}" class="cycontainer"></div>
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
import right from './right.vue'
import cyEditer from './cyEditer.vue'
import { State, Getter, Action, Mutation } from "vuex-class";
@Component({
  components: {
      left,
      right,
      cyEditer
  },
})
export default class Container extends Vue {
    height:number = tools.getPageHeight();
    // bgcolor:string = '#000'
    pname:string = "整体供电拓扑"
    @Getter("get_bg_color") bgcolor: any;
    mounted() {
        
        this.height = tools.getPageHeight();
        this.pname = localStorage.getItem("toponame")
        console.log("this.pname:", this.pname)
        setTimeout(()=>{
            draw.start()
        }, 0)
        
    }
}
</script>

<style scoped lang="scss">
@import "./index.scss"

</style>
