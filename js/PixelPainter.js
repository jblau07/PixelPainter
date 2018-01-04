 let ppCanvas = document.createElement("div");
 document.getElementById("pixelPainter").appendChild(ppCanvas);
 // let gird = document.createElement("div").id = "ppGrid";
 // let erase = document.createElement("div").id = "ppErase";
 // let clear = document.createElement("div").id = "ppClear";
 // let legend = document.createElement("div").id = "ppLegend";


 // let pixel = function(){
 // for (x = 0; x < this.getHeight(); x++) {
 //     for (let y = 0; y < this.getWidth(); y++) {
 //         obj = this.getPixel(x,y);

 //     }

 // }
 // }
 // pixel.appendChild("ppGrid");

 let createGrid = function (x, y) {
     for (let i = 0; i <= x; i++) {
         let row = document.createElement("div");
         row.className = "row";
         ppCanvas.appendChild(row);
     
     for (let k = 0; k <= y; k++) {
         let cell = document.createElement("div");
         cell.className = "cell";
         row.appendChild(cell);
     }
 }
}
createGrid(40,30);