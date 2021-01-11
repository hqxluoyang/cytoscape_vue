<!--
 * @Author: your name
 * @Date: 2020-12-30 10:44:52
 * @LastEditTime: 2020-12-30 14:27:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\components\tipMsg.vue
-->
<template>
  <div class="nodeSetting">
    <el-form ref="form" style="padding-right:14px;margin-top:10px" label-width="80px">
        <el-form-item label="编码">
            <el-input  v-model="lineParam.width"></el-input>
        </el-form-item>

        <el-form-item label="">
            <el-button @click="submit" type="primary">提交</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import tools from '@/utils/tools'
import EventBus from '@/utils/EventBus';
import cyMrg from '@/views/cycontainer/cyMrg'
import { State, Getter, Action, Mutation } from "vuex-class";
let edge = {}
interface mouseXY {
    left:number;
    top:number;
}
@Component({
  components: {
  },
})

export default class TipMsg extends Vue {
    height:number = tools.getPageHeight();
    flag:boolean = false;
    lineColor:string = "green"
    lineParam:any={
        width:10,
        'line-color':this.lineColor
    }

    value:number = 0;

    lineType:string = '1'

    lineOptions:Array<any> = [
        {
          value: '1',
          label: '直线'
        }, {
          value: '2',
          label: '折线'
        }
    ]

    @Getter("get_select_mod") selectMod: any;
    @Getter("get_node_edge") nodeEdge: any;
    mouse:mouseXY = {
        left: 0,
        top:0
    }

    public submit (){
        console.log("set style:", edge)
        for(let key in this.lineParam){
            edge.data(key, this.lineParam[key])
        }
        edge.data("line-color", this.lineColor)
        cyMrg.refreshEdge(edge)
    }

    public mousedown (e:any) {

    }
    mounted() {
        let self = this
        
        EventBus.$on('selectEdge', (el:any)=>{
            console.log('选择线:', el.data())
            try{
                self.lineParam= el.data()
                self.lineColor = el['line-color']
                edge = el
            }catch(e){}
           
        })
    }
}
</script>

<style scoped lang="scss">
.nodeSetting{
    width:100%;
    background: rgb(209, 207, 211);
    left:0;
    position: relative;
}
</style>
