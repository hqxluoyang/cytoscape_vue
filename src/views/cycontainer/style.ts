/*
 * @Author: your name
 * @Date: 2020-12-29 13:57:36
 * @LastEditTime: 2021-01-12 11:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\style.ts
 */
var style = [
          {
            selector: "node",
            css: {
             
              'background-fit': 'cover',
              'background-image-opacity': 1,
              'width': 'mapData()',
              
              'font-size': '20px',
              'background-opacity':0,
              //'pie-i-background-opacity': 0,
              //'height': 'mapData()'
            }
  },
  
          {
            selector: "edge",
            css: {

              'width':'1px;',
              'font-size': '10px',
              'color': '#778899',
              "text-valign": "center",
              "text-halign": "center",
              "curve-style": "bezier",
              "target-arrow-shape": 'triangle-backcurve'
            }
          },

          {
	        selector: 'edge:selected',
            css: {
                
                'line-color': 'yellow',
                'border-width': 0,
                'target-arrow-color': 'yellow',
                'source-arrow-color': 'yellow'
              }
          },

          {
	        selector: 'node:selected',
            css: {
                'shape': 'roundrectangle',
                'text-valign': 'top',
                'height': 'auto',
                'width': 'auto',
                'border-width': 2,
                'border-color': 'red',
                'background-opacity': 1,
                'color': '#888',
                'outline-width':5,
                'font-size': 25
              }
	        }
        ]

export default style