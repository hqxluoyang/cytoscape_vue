/*
 * @Author: your name
 * @Date: 2020-12-29 14:06:54
 * @LastEditTime: 2020-12-29 17:02:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\draw.ts
 */
import cyinit from './cyinit'
import event from './event'
interface cyinitParam { 
    id: string;
}

class cydraw {
    cyid: string = "cytoscapeId"
    constructor() { 
    }
    public init() { 
        cyinit.init();
        event.init()
    }
}

export default new cydraw()
