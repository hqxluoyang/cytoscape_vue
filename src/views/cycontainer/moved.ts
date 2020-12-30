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
      // console.log("old x , old y:", x, y)
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