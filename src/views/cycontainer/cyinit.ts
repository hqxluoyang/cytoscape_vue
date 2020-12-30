/*
 * @Author: your name
 * @Date: 2020-12-29 14:16:52
 * @LastEditTime: 2020-12-30 09:38:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\cyinit.ts
 */

import cytoscape from 'cytoscape'
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

import style from './style'
class cyinit {
    cyid: string = ""
    cy:any = ""
    constructor() { 
        
    }
    public init() { 
        this.cy = cytoscape({
				container: document.getElementById("cytoscapeId"),
				wheelSensitivity: 0.05,
				style: [],
				//elements: {},
        		layout: {
          			name: "breadthfirst"
        		}
			})
    }
}

export default new cyinit()
