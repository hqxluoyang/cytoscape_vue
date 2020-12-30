<!--
 * @Author: your name
 * @Date: 2020-12-30 09:47:44
 * @LastEditTime: 2020-12-30 13:32:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\left.vue
-->

<template>
  <div class="leftpage">
     <div class="group">
         <ul class="leftContainer">
             <li @mousedown="mousedown(el)" class="item"  v-for="(el, index) in items" :key="index">{{index}}</li>
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
@Component({
  components: {
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

    mousedown (el:any) {
        this.$store.state.selectMod = el;
    }

    mounted() {
        
    }
}
</script>

<style scoped lang="scss">
@import "./left.scss"
</style>


