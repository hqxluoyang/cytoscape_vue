/*
 * @Author: your name
 * @Date: 2020-12-29 17:09:32
 * @LastEditTime: 2020-12-29 17:53:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\dradLine.ts
 */

import cyinit from './cyinit'
import cyMrg from './cyMrg'
import moved from './moved'
import tools from '@/utils/tools'
class drawLine {
    mode: number = 1
    startNode: any = '';
    dragNode: any = '';
    public tapNode(drag: any, evt: any) { 
        let cy = cyinit.cy;
        console.log("this.startNode:", this.startNode)
        if (this.startNode) { 
            let nodeAId = this.startNode.data().id
            let nodeBId = drag.data().id
            if (nodeAId == nodeBId) return

            let line = cyMrg.createLine({
                source: nodeAId,
                target: nodeBId
            })
            /*
            let nid = tools.getUUID()
            /*
            let newNode = cyMrg.createNode({
                label: "",
                id:nid
            })
            */

            cy.add({
                groups: "edges",
                data: line
            })

            cy.remove(this.dragNode)

            // cyMrg.addEdge (line)    todo save edges
            
            this.dragNode = '';
            this.startNode='';
            console.log("add node")

        } else {
            this.startNode = drag
            let newNode = cyMrg.createNode({
                id: "tempNode",
                label: ""
            })

            cy.add({
                group: "nodes",
                position: evt.position,
                data: newNode
            }).style({
                'background-color': 'red',
                'width': "1px",
                'visibility': 'visible',
                'height': "1px"
            })

            let line = cyMrg.createLine({
                source: "tempNode",
                target: drag.data().id
            })

            cy.add({
                groups: "edges",
                data: line
            })

            this.dragNode = cy.getElementById("tempNode");
            
        }
    }

    public tapStart () {
        moved({ x: 0, y: 0 })
    }

    public mouseMove (self:any, evt:any) {
        if(this.dragNode){
            let xy =  {
                x: evt.position.x + 5,
                y: evt.position.y + 5
            }
            this.dragNode.position(xy)
        }
    }

    public drag () {
        this.startNode = ''
    }
}
 
export default new drawLine()