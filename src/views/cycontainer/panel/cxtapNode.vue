<!--
 * @Author: your name
 * @Date: 2021-01-04 17:45:47
 * @LastEditTime: 2021-01-04 17:46:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\panel\cxtapLine.vue
-->
<template>
  <div @click="clickPanel()" v-if="flag" class="topPanel">
    <div :style="{left: left + 'px', top: top + 'px'}"  class="cxtapLine">
        <ul>
          <li class="item" @click="clickt(el)" v-for="(el , index) in list" :key="index">{{el.name}}</li>
        </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventBus from '@/utils/EventBus'
import cyinit from '@/views/cycontainer/cyinit'
var edge = ""
@Component({
  components: {
      
  },
})
export default class Container extends Vue {
   flag:boolean = false;
   list:Array<any> = [{
     name: '删除',
     type: 'del'
   },{
     name: '设备',
     type: 'goto'
   }];
   left:number = 100;
   top:number = 100;

  clickt (el:any) {
    let cy = cyinit.cy;
    if(el.type == 'del'){
      cy.remove(edge)
    }
  }

  clickPanel () {
    this.flag = false;
  }


   mounted() {
      EventBus.$on('cxttapNode', (evt:any)=>{
        edge = evt;
        console.log("evt:", evt)
        this.flag = true
      })

      EventBus.$on('contextmenu', (evt:any)=>{
        console.log("右键:", evt)
        this.left = evt.clientX
        this.top = evt.clientY
      })
   }
}
</script>

<style scoped lang="scss">
.topPanel{
  position: absolute;
  left: 0;
  top: 0;
  background: #0202025e;
  z-index: 10;
  width: 100%;
  height: 100%;
  .cxtapLine{
      position: absolute;
      width: 250px;
      z-index: 12000;
      border-radius: 5px;
      background: #ccc;
      min-height: 50px;
      text-align: center;
      left: 100px;
      top: 30px;
      .item{
        height:40px;
        line-height: 40px;
        border-bottom:1px solid #000;
        cursor: pointer;
      }
  }
}


</style>
