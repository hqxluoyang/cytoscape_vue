<!--
 * @Author: your name
 * @Date: 2020-12-30 10:44:52
 * @LastEditTime: 2020-12-30 14:27:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\components\tipMsg.vue
-->
<template>
  <div :style="{left: mouse.left + 'px', top: mouse.top + 'px'}" v-show="selectMod" class="tipMsg">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import tools from '@/utils/tools'
import EventBus from '@/utils/EventBus';
import cyMrg from '@/views/cycontainer/cyMrg'
import { State, Getter, Action, Mutation } from "vuex-class";
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
    @Getter("get_select_mod") selectMod: any;
    mouse:mouseXY = {
        left: 0,
        top:0
    }

    public mousedown (e:any) {

    }
    mounted() {
        let self = this
        EventBus.$on('webmousemove', (e:any)=>{
            if(this.$store.state.selectMod){
                this.flag = true;
                this.mouse = {
                    left: e.clientX + 5,
                    top: e.clientY + 5
                }
            }else{
                 self.flag = false;
            }
            
        })
        EventBus.$on('webmouseup', (e:any)=>{
            if(this.selectMod){
                cyMrg.addNode({
                    position: {
                        x: e.clientX - 250,
                        y: e.clientY
                    }
                })
                console.log('webmouseup:', e, e.clientX, e.clientY)
            }
            setTimeout(()=>{
                self.$store.state.selectMod = "";
            }, 50)
        })

        EventBus.$on('webmousedown', (e:any)=>{
            self.mouse = {
                    left: e.clientX + 5,
                    top: e.clientY + 5
                }
        })
    }
}
</script>

<style scoped lang="scss">
.tipMsg{
    width:20px;
    background: rebeccapurple;
    z-index:1000;
    position: absolute;
    height:20px
}
</style>
