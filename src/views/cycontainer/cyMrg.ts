/*
 * @Author: your name
 * @Date: 2020-12-30 09:07:43
 * @LastEditTime: 2021-01-12 10:08:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\cyMrg.ts
 */
import cytoscape from 'cytoscape'
import tools from '@/utils/tools'
import cyinit from "./cyinit"
interface cyinitParam { 
    id: string;
}

interface cyLine {
    source:string;
    id:string;
    target:string;
}

interface cyNode{
    id: string;
    label: string;
}


import style from './style'
import { ElDatePicker } from 'element-ui/types/date-picker'
class cyMrg {
    cyid: string = ""
    cy:any = ""
    constructor() { 
        
    }

    public createLine (param: cyLine) {
        return {
            id: param.id ||tools.getUUID(),
            source: param.source || '',
            target: param.target || ''
        }
    }
    
    public createNode (param: cyNode) {
        return {
            id: param.id || tools.getUUID(),
            label: param.label || '',
            color: '#fff'
        }
    }

    public addNode(param: any) {
        let cy = cyinit.cy;
        let panXY = cy.pan();
        let newNode = this.createNode({
                id: "",
                label: ""
            })
        
        /*******************************/
            let newparam = {
                "class": "complex",
                "label": "",
                // "path": param.el.path,
                "type": param.el.type,
                "parent": "glyph2",
                "clonemarker": false,
                "stateVariables": [],
                "unitsOfInformation": [],
                "bbox": {
                    "x": 1804.8844575025842,
                    "y": 102.97480600819699,
                    "w": 121.5,
                    "h": 136.5
                }
            }
            newNode = Object.assign(newNode, newparam);
            console.log("new node:", newNode)
        /********************************/
        let nodeMod =  cy.add({
            group: "nodes",
            position: {
                x: param.position.x - panXY.x,
                y: param.position.y - panXY.y
            },
            data: newNode
        })
        this.setOneStyle(nodeMod)
        
    }

    setNodeStyle (){
        let cy = cyinit.cy;
        let self = this;
        cy.nodes((node:any, i:number)=>{
            console.log("node:", node.data())
            self.setOneStyle(node)
        })
    }

    setEdgeStyle (){
        let cy = cyinit.cy;
        let self = this;
        cy.edges((edge:any, i:number)=>{
            self.setOneEdgeStyle(edge)
        })
    }

    setOneStyle (node:any){
        let data = node.data()
        if(data.type == 'point'){
            node.style({
                'background-color': '#00000',
                'width': "10px",
                'background-opacity':1,
                'visibility': 'visible',
                'transform':'rotate(90deg)',
                'height': "10px"
            })
        }else if (data.type == 'rect'){
            
            node.style({
                'background-color': '#eee',
                'color': 'yellow',
                'width': "80px",
                'font-size': '30px',
                "text-wrap": "wrap",
                "text-max-width": "10px",
                'opacity': 0.5,
                'background-opacity':0.8,
                "text-valign": "center",
                "text-halign": "center",
                "text-background-color": "#888",
                "shape": "round-rectangle",
                'visibility': 'visible',
                'height': "50px"
            })
        }else{
            let img = require("@/assets/tools/" + data.type + ".png")
            node.style({
                'background-color': '#eee',
                'color': 'yellow',
                //'width': "50px",
                //'content': data.label,
                'font-size': '30px',
                "text-wrap": "wrap",
                "text-max-width": "10px",
                "text-valign": "top",
                'background-opacity':0,
                "text-halign": "center",
                "text-background-color": "#888",
                "shape": "round-rectangle",
                'visibility': 'visible',
                'transform':'rotate(90deg)',
                'background-image': img,
                //'height': "50px"
            })
        }
    }

    setOneEdgeStyle (edge:any){
        let data = edge.data()
        let style = {
            width: 1,
            "curve-style": "bezier",
            "target-arrow-shape": 'triangle-backcurve'
        }
        if(data.width){
            style['width'] = data.width;
        }
        if(data.width){
            style['line-color'] = data['line-color'];
        }
        edge.style(style)
    }

    refreshEdge (edge:any){
        let data = edge.data()
        let style = {
            // "target-arrow-shape": 'circle-triangle'
           // "curve-style": "bezier"
        }
        if(data.width){
            style['width'] = data.width;
        }
        if(data.width){
            style['line-color'] = data['line-color'];
        }
        edge.style(style)
    }

    public init() { 
       
    }

    public addEdge () {

    }
}

export default new cyMrg()