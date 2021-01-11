/*
 * @Author: your name
 * @Date: 2020-12-29 14:06:54
 * @LastEditTime: 2021-01-06 17:21:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\draw.ts
 */
import cyinit from './cyinit'
import event from './event'
import Config from '@/utils/config.ts'
import axios from 'axios'
import cyMrg from './cyMrg'
interface cyinitParam {
    id: string;
}

class cydraw {
    cyid: string = "cytoscapeId"
    constructor() {
    }

    public start() {
        let self = this;
        axios.get("/diagram/getdata/", {
            params: { 'name': 'editer_topo_12345' }
        }).then(function (response) {
            let param = response.data
            if (param.code == 1) {
                try {
                    let data = JSON.parse(param.data)
                    self.draw(data)
                } catch (e) { }

            } else {
                self.draw("")
            }

        }).catch(function (error) {
            self.draw("")
        });
    }

    public draw(data:any) {
        this.init(data)
    }

    public init(data:any) {
        cyinit.init();
        event.init()
        let cy = cyinit.cy;

        if(data.nodes && data.nodes.length > 0) cy.add(data.nodes)

        if(data.edges && data.edges.length > 0) cy.add(data.edges)

        if(data.bg) Config.vue.$store.state.bgcolor = data.bg;

        if(data.pan) cy.pan(data.pan)

        if(data.zoom) cy.zoom(data.zoom)

        cyMrg.setNodeStyle();
        cyMrg.setEdgeStyle();
    }
}

export default new cydraw()
