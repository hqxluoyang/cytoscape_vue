/*
 * @Author: your name
 * @Date: 2021-01-11 09:40:27
 * @LastEditTime: 2021-01-12 13:53:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \sanyuan_edite_topo\src\views\cycontainer\moved.ts
 */
interface optXY {
    x:number;
    y:number;
}

function moved () {
    var x = 0;
    var y = 0;
  
    var tempX = 0
    var tempY = 0
  
    return function (opt:optXY) {
      tempX = x;
      tempY = y;
      var optt = {
        x: tempX,
        y: tempY
      }
      x = opt.x
      y = opt.y
      
      if (tempX == 0) {
        return {
          mx: 0,
          my: 0
        }
      } else {
        return {
          mx: opt.x - optt.x,
          my: opt.y - optt.y
        }
      }
  
    //    return optt
    }
  
  }
  var mposi = moved()
  
  export default mposi