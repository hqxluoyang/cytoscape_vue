/*
 * @Author: your name
 * @Date: 2020-12-29 14:16:52
 * @LastEditTime: 2021-01-11 09:46:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\cyinit.ts
 */



let tipsnode = []
class nodeTip {
    cyid: string = ""
    cy:any = ""
    
    public init(cy) { 
        this.cy = cy
		this.tipinit(cy)
    }

    updateSignal(tipNode) {
        tipNode.scheduleUpdate()
    }

    makeDiv(text, flag, id) {
        var div = document.createElement('div');
        var img = document.createElement('img');
        div.classList.add('popper-div');
        //div.style.background = "#000"
        //div.style.color = "#fff"
        //div.style.padding = "10px"
        div.style.display = flag || 'none';
        // div.innerHTML = text;
        img.style.height = "40px"
        if (id) {
            div.id = "tip_" + id
            div.setAttribute("nodeid", id)
        }
        img.src = require("../../assets/icon/status1.png")
        div.appendChild(img)

        document.body.appendChild(div);

        return div;
    }

    addEvent() {
        this.cy.on('pan zoom resize', this.updataAll);
    }

    updataAll() {
        tipsnode.map((node) => {
            node.scheduleUpdate()
        })
    }

    refreshTip() {
        console.log("this.refresh:", tipsnode)
        tipsnode.map((ntip) => {

            let n = Math.floor(Math.random() * 3);
            ntip.popper.style.display = (n == 1 ? "block" : "none")
        })
    }

    tipinit (cy){
        let self = this;
        return;
        tipsnode = []
        try {
            cy.nodes((node, i) => {
                console.log("node--:", node)
                let d = node.data()
                if(d['type'] != 'point'){
                    let newTip = node.popper({
                        content: () => {
                            return self.makeDiv("hello world", "none", d.id);
                        },
                        popper: {} // my popper options here
                    });
                    try {
                        node.on('position', () => {
                            self.updateSignal(newTip)
                        });
                    } catch (e) {
                        console.error(e)
                    }
                    console.log("newTip:", newTip)
                    tipsnode.push(newTip)
                }
            })
        } catch (e) {
            console.error(e)
        }
        this.addEvent(cy)
        setInterval(() => {
            self.refreshTip()
        }, 2000)
    }
}

export default new nodeTip()
