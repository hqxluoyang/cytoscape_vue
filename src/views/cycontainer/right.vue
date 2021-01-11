<!--
 * @Author: your name
 * @Date: 2020-12-30 15:55:04
 * @LastEditTime: 2020-12-30 15:56:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\right.vue
-->

<template>
  <div class="rightpage">
     <div class="setting">编辑</div>
     <div class="group">
         <ul class="leftContainer">
              <cyMain />
         </ul>
         <ul v-show = 'flag == 1' class="leftContainer">
             <edgeSetting />
         </ul>
         <ul v-show = 'flag == 2' class="leftContainer">
             <nodeSetting />
         </ul>
     </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import draw from "./draw"
import tools from '@/utils/tools'
import EventBus from '@/utils/EventBus'
import left from './left.vue'
import edgeSetting from '@/components/edgeSetting.vue'
import nodeSetting from '@/components/nodeSetting.vue'
import cyMain from '@/components/cyMain.vue'
@Component({
  components: {
      edgeSetting,
      nodeSetting,
      cyMain
  },
})
export default class Container extends Vue {
    height:number = tools.getPageHeight();
    public items:Array<any> = [{
        name:'Xender'
    },{
        name:'Xender1'
    },{
        name:'Xender2'
    },{
        name:'Xender3'
    }]

    flag:number = 0;

    mousedown (el:any) {
        this.$store.state.selectMod = el;
    }

    mounted() {
        EventBus.$on('selectEdge', (evt:any)=>{
            this.flag = 1;
        })

        EventBus.$on('selectNode', (evt:any)=>{
            this.flag = 2;
        })
    }
}
</script>

<style scoped lang="scss">
@import "./style/right.scss"
</style>



