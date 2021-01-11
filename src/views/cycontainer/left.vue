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
             <li @mousedown="mousedown(el)" class="item"  v-for="(el, index) in items" :key="index">
                 <img :src="el.path" />
             </li>
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
        label:'电路闭合',
        path: require("@/assets/tools/电路闭合.png"),
        type: "电路闭合"
    },{
        label:'电路',
        path: require("@/assets/tools/电路.png"),
        type: "电路"
    },{
        label:'电路保护',
        path: require("@/assets/tools/电路保护.png"),
        type: "电路保护"
    },{
        label:'电路查询',
        path: require("@/assets/tools/电路查询.png"),
        type: "电路查询"
    },{
        label:'节点',
        path: require("@/assets/tools/点.png"),
        type: "point"
    },{
        label:'叉',
        path: require("@/assets/tools/叉.png"),
        type: "叉"
    },{
        label:'三工位开关',
        path: require("@/assets/tools/三工位开关.png"),
        type: "三工位开关"
    },{
        label:'熔断式开关',
        path: require("@/assets/tools/熔断式开关.png"),
        type: "熔断式开关"
    },{
        label:'出水断电开关',
        path: require("@/assets/tools/出水断电开关.png"),
        type: "出水断电开关"
    },{
        label:'电路图',
        path: require("@/assets/tools/电路图.png"),
        type: "电路图"
    },{
        label:'rect',
        path: require("@/assets/tools/电路图.png"),
        type: "rect"
    }]

    mousedown (el:any) {
        this.$store.state.selectMod = el;
    }

    mounted() {
        
    }
}
</script>

<style scoped lang="scss">
@import "./style/left.scss"
</style>


