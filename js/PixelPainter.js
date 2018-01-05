const ppCanvas = document.getElementById("pixelPainter");

let gridBox = document.createElement("div");
gridBox.className = "gridBox";
ppCanvas.appendChild(gridBox);

let colors = ['blue', 'red', 'green', 'yellow'];
let colors2 = "white";

let swatchBox = document.createElement("div");
//swatchBox.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
swatchBox.className = "swatchBox";
ppCanvas.appendChild(swatchBox);



function createGrid(x, y, element, bgColor) {
    let counter = 0;
    
    for (let i = 1; i <= x; i++) {
        let row = document.createElement("div");
        row.className = "row";

        for (let j = 1; j <= y; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.backgroundColor = bgColor[counter ++];
            row.appendChild(cell);

        }
        element.appendChild(row);
    }
};

createGrid(2, 2, swatchBox, colors);

createGrid(30, 30, gridBox, colors2);



//function fillSwatchBox (container){}

let indivColor = swatchBox.getElementsByClassName("cell");

// function createPalette () {
//     indivColor.forEach(function(cell, index){
//         swatchBox.style.backgroundColor = colors[index];
//     })
//  }





let eraseButton = document.createElement("button");
eraseButton.innerHTML = "Erase";
ppCanvas.appendChild(eraseButton);

eraseButton.addEventListener("click", function () {
    alert("heyyy");
});


let clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
ppCanvas.appendChild(clearButton);

clearButton.addEventListener("click", function () {
    alert("heyyy");
});