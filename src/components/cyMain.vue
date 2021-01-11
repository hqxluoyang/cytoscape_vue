<!--
 * @Author: your name
 * @Date: 2020-12-30 10:44:52
 * @LastEditTime: 2020-12-30 14:27:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\components\tipMsg.vue
-->
<template>
  <div class="cySetting">
    <el-form ref="form" style="padding-right:14px;margin-top:10px" label-width="80px">
        <el-form-item label="背景颜色">
            <el-color-picker v-model="bcolor" show-alpha></el-color-picker>
        </el-form-item>
        <el-form-item label="报警">
            <el-checkbox @change="change()" v-model="checked"></el-checkbox>
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
import cyinit from '@/views/cycontainer/cyinit'
import nodeTip from '@/views/cycontainer/nodeTip'
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
    
    
    value:number = 0;
    bcolor:string = '#ccc';
    lineType:string = '1'
    checked:boolean = false;
    @Getter("get_bg_color") bgcolor: any;
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
    mouse:mouseXY = {
        left: 0,
        top:0
    }

    public submit (){
        console.log("bgcolor:", this.bgcolor)
        this.$store.state.bgcolor = this.bcolor;
    }

    public change (){
       console.log("this.checked:", this.checked)
       if(this.checked) nodeTip.init(cyinit.cy)
    }

    public mousedown (e:any) {

    }
    mounted() {
        let self = this
    }
}
</script>

<style scoped lang="scss">
.cySetting{
    width:100%;
    background: rgb(209, 207, 211);
    left:0;
    position: relative;
    margin-bottom:5px;
}
</style>
