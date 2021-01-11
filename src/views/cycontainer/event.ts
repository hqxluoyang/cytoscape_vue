/*
 * @Author: your name
 * @Date: 2020-12-29 16:55:01
 * @LastEditTime: 2021-01-04 17:50:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\event.ts
 */

 import cyinit from './cyinit'
 import EventBus from '@/utils/EventBus'
 import drawLine from './drawLine'

class EventMrg {
    init() {
        let cy = cyinit.cy;
        console.log('event init :', cy, cy.pan())
        cy.on('tap', 'node', function(evt:any){
            console.log("this----:", evt, evt) 
            drawLine.tapNode(this, evt)
            EventBus.$emit('selectNode', this)
        })

        cy.on('tap', 'edge', function(evt:any){
            EventBus.$emit('selectEdge', this)
        })

        cy.on('dblclick', 'edge', function(evt:any){
            alert("d")
        })

        cy.on('drag', 'node', function(evt:any){ 
            drawLine.drag(this, evt)
        })

        cy.on('tapstart', 'node', function(evt:any){ 
            drawLine.tapStart()
        })

        cy.on('mousemove', function(evt:any){ 
            drawLine.mouseMove(this, evt)
        })
        cy.on('mouseup', function(evt:any){ 
            
        })
        
        cy.on('cxttap', 'edge', function(evt:any){ 
            EventBus.$emit('cxttapLine', this)
        })

        cy.on('cxttap', 'node', function(){ 
            EventBus.$emit('cxttapNode', this)
        })
        

        cy.on('cxttap', function(evt:any) {
            drawLine.delDragLine(this, evt)
        })

        
     }
}
 
export default new EventMrg()
