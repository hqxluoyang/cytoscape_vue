/*
 * @Author: your name
 * @Date: 2020-12-29 16:55:01
 * @LastEditTime: 2020-12-30 14:07:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\event.ts
 */

 import cyinit from './cyinit'
 import drawLine from './drawLine'

class EventMrg {
    init() {
        let cy = cyinit.cy;
        console.log('event init :', cy)
        cy.on('tap', 'node', function(evt:any){
            console.log("this:", evt, evt) 
            drawLine.tapNode(this, evt)
        })

        cy.on('drag', 'node', function(evt:any){ 
        })

        cy.on('mouseup', function (evt: any) {
            console.log("mouse up -------")
        })

        cy.on('tapstart', 'node', function(evt:any){ 
            drawLine.tapStart()
        })

        cy.on('mousemove', function(evt:any){ 
            drawLine.mouseMove(this, evt)
        })

        cy.on('cxttap', 'edge', () => { 

        })

        
     }
}
 
export default new EventMrg()
