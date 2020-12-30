/*
 * @Author: your name
 * @Date: 2020-12-29 15:46:00
 * @LastEditTime: 2020-12-29 15:47:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\utils\tools.ts
 */

class tools {
    public getPageHeight() { 
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }

    public getPageWidth() { 
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }

    public getUUID () {
        var s4 = function () {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
        }
        return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4())
    }
}
 
export default new tools()