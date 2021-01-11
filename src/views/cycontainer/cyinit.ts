/*
 * @Author: your name
 * @Date: 2020-12-29 14:16:52
 * @LastEditTime: 2021-01-11 09:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\cyinit.ts
 */


interface cyinitParam { 
    id: string;
}

let elements = {
					nodes: [
						{ data: { id: 'a' } },
						{ data: { id: 'b' } },
						{ data: { id: 'c' } }
					],
					edges: [
						{ data: { id: 'ab', source: 'a', target: 'b' } }
					]
				}

import cytoscape from 'cytoscape'
import style from './style'
//import dblclick from 'cytoscape-dblclick';
import datajson from './data.json'
import cytoscapeSbgnStylesheet from 'cytoscape-sbgn-stylesheet'
import cytoscapeGridGuide from 'cytoscape-grid-guide'
import nodeTip from './nodeTip'
import popper from "cytoscape-popper"
import gridOptions from './gridOptions'
class cyinit {
    cyid: string = ""
    cy:any = ""
    constructor() { 
        
    }
    public init() { 
	//	cytoscape.use( dblclick );
		// cytoscape.use( cytoscapeSbgnStylesheet );
		let self = this;
		popper(cytoscape)
		cytoscapeGridGuide(cytoscape)
        this.cy = cytoscape({
				container: document.getElementById("cytoscapeId"),
				//style: cytoscapeSbgnStylesheet(cytoscape),
				//elements: datajson,
				wheelSensitivity: 0.05,
				// elements: elements,
        		layout: {
          			//name: "breadthfirst"
        		}
			})
		// this.cy.gridGuide(gridOptions)
		console.log("this.cy:", this.cy.gridGuide)
		//this.cy.dblclick();
		//nodeTip.init(this.cy)
		setInterval(() => {
			/*
			this.cy.nodes((node:any, i:number) => {
                console.log("node--:", node)
                let d = node.data()
                if(d['type'] != 'point'){
					node.data('label', "heh");
					let dboolen = Math.floor(Math.random()*3)
					let number = Math.floor(Math.random()*100)

					if(dboolen != 2) number = ''

					node.style({
						label: number
					})
                }
			})
			*/
		},2000)
    }
}

export default new cyinit()
