<!--
 * @Author: your name
 * @Date: 2021-01-04 17:45:47
 * @LastEditTime: 2021-01-04 17:46:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\panel\cxtapLine.vue
-->
<template>
  <el-dialog
      title="topo切换"
      style="z-index:5000"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div v-for="(el, index) in list" :key="index">
        <el-button @click="changeC(el)" type="primary" style="margin-top:10px" >{{el.name}}</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
   dialogVisible:boolean = false;
   list:Array<any> = [{
     name: '楼层供电拓扑一楼'
   },{
     name: '楼层供电拓扑二楼',
     type: 'goto'
   },{
     name: '整体供电拓扑',
     type: 'goto'
   },{
     name: '楼层水冷拓扑一楼',
     type: 'goto'
   },{
     name: '楼层水冷拓扑二楼',
     type: 'goto'
   },{
     name: '整体水冷拓扑',
     type: 'goto'
   },{
     name: '测试1',
     type: 'goto'
   },{
     name: '测试2',
     type: 'goto'
   },{
     name: '12345',
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

  changeC (el:any) {
    this.dialogVisible = false
    localStorage.setItem("toponame", el.name)
    location.reload();
  }

  handleClose () {
    this.dialogVisible = false;
  }


   mounted() {
      EventBus.$on('changeCname', (evt:any)=>{
        this.dialogVisible = true;
      })
   }
}
</script>

<style scoped lang="scss">
.topPanel{
  position: absolute;
  left: 0;
  top: 0;
  
  z-index: 10;
 
  .cxtapLine{
      position: absolute;
      width: 250px;
     
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
