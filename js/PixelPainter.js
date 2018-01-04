 let ppCanvas = document.getElementById("pixelPainter");

 let gridBox = document.createElement("div")
 gridBox.className = "gridBox";
 ppCanvas.appendChild(gridBox);

 let swatchBox = document.createElement("div");
 swatchBox.className = "swatchBox";
 ppCanvas.appendChild(swatchBox);
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

 let createGrid = function (x, y, element) {
     for (let i = 1; i <= x; i++) {
         let row = document.createElement("div");
         row.className = "row";
        

         for (let k = 1; k <= y; k++) {
             let cell = document.createElement("div");
             cell.className = "cell";
             row.appendChild(cell);
         }
         element.appendChild(row);
     }
 }

//  let colors = ["red", "blue", "yellow", "orange", "purple", "green", "gray", "brown", "black", "white"];
//  let colorButtons = document.getElementsByClassName("cell");


 
//  let button = document.createElement("button");
//  button.innerHTML = "p";

//  let purpleB = document.getElementsByTagName("purpleB");
//  purpleB.appendChild(button);

 
 
/*let createGrid2 = function (x, y) {
    for (let i = 1; i <= x; i++) {
        let row2 = document.createElement("div");
        row2.className = "row2";
       

        for (let k = 1; k <= y; k++) {
            let cell2 = document.createElement("div");
            cell2.className = "cell2";
            row2.appendChild(cell2);
        }
        ppCanvas2.appendChild(row2);
    }
}
 */
 
 createGrid(3, 6, gridBox);

 let grid2 = createGrid(30, 30, swatchBox);
//  grid1.id = "legend";

 //let grid2 = createGrid(30, 30);
// grid2.id = "blankGrid";

//  let grid2 = createGrid(3, 3);
//  grid2.id = ("legend");
 

 