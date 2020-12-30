/*
 * @Author: your name
 * @Date: 2020-12-29 13:57:36
 * @LastEditTime: 2020-12-29 14:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\style.ts
 */
var style = [
          {
            selector: "node",
            css: {
              label: "data(portname)",
              'shape': 'rectangle',
              "content": "data(equipname)",
              // 'background-image': "../static/assets/icon/distributing_cabinet.png",
              //'background-image': "../../../static/distributing_cabinet.png",
              'background-fit': 'cover',
              'background-image-opacity': 1,
              'width': 'mapData()',
              //'weight': 50,
              //"z-index": -110,
              'shape': 'rectangle',
            
              'font-size': '20px',
              'background-opacity':0,
              //'pie-i-background-opacity': 0,
              //'height': 'mapData()'
            }
          },
          {
            selector: "edge",
            css: {
              'target-label': 'data(s_port)',
              'source-label': 'data(e_port)',
              'source-text-offset': '50px',
              'target-text-offset': '50px',
              'font-size': '10px',
              "curve-style": "bezier",
              'color': '#778899',
              //"curve-style": "portname",
              //"content": "data(portname)",
              //"label": "data(portname)",
              "text-valign": "center",
              "text-halign": "center",
              'line-color': '#00868B',
               "curve-style": "bezier"
            }
          },

          {
	        selector: ':selected',
	        css: {
            	
            	'line-color': 'yellow',
              'border-width': 0,
            	'target-arrow-color': 'yellow',
            	'source-arrow-color': 'yellow'
          	}
	        }
        ]

export default style