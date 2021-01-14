<!--
 * @Author: your name
 * @Date: 2020-12-30 15:55:04
 * @LastEditTime: 2021-01-06 16:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\right.vue
-->

<template>
  <div class="cyEditer">
     <ul class="ulstyle">
         <li class="item" v-for="(el, index) in items" :key="index">
             <el-button size='mini' @click="clickTools(el)" type="primary">{{el.name}}</el-button>
         </li>
     </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import tools from '@/utils/tools'
import EventBus from '@/utils/EventBus'
import cyinit from './cyinit';
import axios from 'axios'
import Config from '@/utils/config'
@Component({
  components: {
  },
})
export default class Container extends Vue {
    height:number = tools.getPageHeight();
    public items:Array<any> = [{
        name:'保存'
    },{
        name:'水平对齐'
    },{
        name:'水平均分'
    },{
        name:'垂直对齐'
    },{
        name:'垂直均分'
    },{
        name:'刷新'
    },{
        name:'视图切换'
    }]

    clickTools (el:any) {
        let cy = cyinit.cy;
        console.log("el.type:", el.type)
        if(el.name == '水平对齐'){
            console.log("this.horizontalAlignment(cy)")
            this.horizontalAlignment(cy);
        }else if(el.name == '垂直对齐'){
            this.VerticalAlignment(cy);
        }else if(el.name == '水平均分'){
            this.HorizontalAverage(cy);
        }else if(el.name == '垂直均分'){
            this.VerticalAverage(cy);
        }else if(el.name == '保存'){
            this.save(cy);
        }else if(el.name == '视图切换'){
            EventBus.$emit('changeCname', "")
        }
    }

    HorizontalAverage (cy:any){
        let fnode = ""
        let min = 100000;
        let max = 0;
        let nodes = []
        let nodesArr = []
        cy.nodes((node:any, i:number) => {
            
            let position = node.position()
            
            if(node.selected() && position.x < min){
                min = position.x
            }

            if(node.selected()){
                nodes.push({
                    node:node,
                    position:position
                })
                nodes.push(node)
            }

            if(node.selected() && position.x > max){
                max = position.x
            }

        })

        for(let j=0; j<nodes.length; j++){
            if(nodes[j]['position']['x']){
                nodesArr.push(nodes[j])
            }
        }

        let maxLen = (max - min)/nodesArr.length 

        console.log("nodes:", nodesArr)

        if(nodesArr.length < 3) return
        
        nodesArr.sort((nodeA:any, nodeB:any)=>{
            
            if(nodeA.node.position.x > nodeB.node.position.x){
                return -1
            }else{
                return 1
            }
        })

        for(let i=0; i<nodesArr.length; i++){
            nodesArr[i].node.position({
                x: min + i * maxLen
            })
        }
    }

    save (cy:any){
        var json = cy.json()
		var content = json.elements
        content['bg'] = Config.vue.$store.state.bgcolor;
        content['pan'] = cy.pan();
        content['zoom'] = cy.zoom();
		var cc = JSON.stringify(content)

		cc = cc.replace(new RegExp('undefined',"gm"),'""');
        cc = cc.replace(new RegExp('NaN',"gm"), 0);
    
        var formData = new FormData();
        let name = "editer_topo_" + localStorage.getItem("toponame")
        formData.append("name", name);
        formData.append("data", cc);
        console.log("cy.pan:", cy.pan(), cy.zoom())
        axios({
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            url: '/diagram/direct_create/',
        
            data: formData
        
        })
    }

    VerticalAverage(cy:any){
       let fnode = ""
        let min = 100000;
        let max = 0;
        let nodes = []
        let nodesArr = []
        cy.nodes((node:any, i:number) => {
            
            let position = node.position()
            
            if(node.selected() && position.x < min){
                min = position.y
            }

            if(node.selected()){
                nodes.push(node)
            }

            if(node.selected() && position.x > max){
                max = position.y
            }

        })

        for(let j=0; j<nodes.length; j++){
            if(nodes[j]['position']['x']){
                nodesArr.push(nodes[j])
            }
        }

        let maxLen = (max - min)/nodesArr.length 

        if(nodesArr.length < 3) return

        nodesArr.sort((nodeA:any, nodeB:any)=>{
            
            if(nodeA.node.position.y > nodeB.node.position.y){
                return 1
            }else{
                return -1
            }
        })

        for(let i=0; i<nodesArr.length; i++){
            nodesArr[i].position({
                y: min + i * maxLen
            })
        }
        
    }

    horizontalAlignment (cy:any){
        let fnode = ""
        cy.nodes((node:any, i:number) => {
            
            if(fnode && node.selected()){
                node.position({
                    y:fnode.y
                })
            }
            
            if(!fnode && node.selected()){
                fnode = node.position()
            }
            console.log("node:", node.selected(), node.position())
        })
    }

    VerticalAlignment (cy:any){
        let fnode = ""
        cy.nodes((node:any, i:number) => {
            
            if(fnode && node.selected()){
                node.position({
                    x:fnode.x
                })
            }
            
            if(!fnode && node.selected()){
                fnode = node.position()
            }
            console.log("node:", node.selected(), node.position())
        })
    }

    mounted() {
        
    }
}
</script>

<style scoped lang="scss">
.cyEditer{
    position: absolute;
    padding:10px;
    z-index:10000;
    .ulstyle{
        display: flex;
        .item{
            margin-left:5px;
        }
    }
}
</style>