/*
 * @Author: your name
 * @Date: 2020-12-30 09:07:43
 * @LastEditTime: 2020-12-30 14:21:06
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
    target:string;
}

interface cyNode{
    id: string;
    label: string;
}


import style from './style'
class cyMrg {
    cyid: string = ""
    cy:any = ""
    constructor() { 
        
    }

    public createLine (param: cyLine) {
        return {
            id: tools.getUUID(),
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
        let newNode = this.createNode({
                id: "",
                label: ""
            })

        cy.add({
            group: "nodes",
            position: param.position,
            data: newNode
        })
    }

    public init() { 
       
    }

    public addEdge () {

    }
}

export default new cyMrg()