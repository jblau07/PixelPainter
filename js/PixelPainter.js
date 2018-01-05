const ppCanvas = document.getElementById("pixelPainter");

let gridBox = document.createElement("div");
gridBox.className = "gridBox";
ppCanvas.appendChild(gridBox);

let colors = ['blue', 'red', 'green', 'yellow'];


let swatchBox = document.createElement("div");
//swatchBox.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
swatchBox.className = "swatchBox";
ppCanvas.appendChild(swatchBox);


// creat swatch grid
function createSwatchGrid(x, y, element,) {
    let counter = 0;
    
    for (let i = 1; i <= x; i++) {
        let row = document.createElement("div");
        row.className = "row";

        for (let j = 1; j <= y; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.backgroundColor = colors[counter ++];
            row.appendChild(cell);

        }
        element.appendChild(row);
    }
};
// create blank grid
function createBlankGrid(x, y, element) {
    let counter = 0;
    
    for (let i = 1; i <= x; i++) {
        let row2 = document.createElement("div");
        row2.className = "row2";

        for (let j = 1; j <= y; j++) {
            let cell2 = document.createElement("div");
            cell2.className = "cell2";
            cell2.style.backgroundColor = "blue";
            row2.appendChild(cell2);

        }
        element.appendChild(row2);
    }
};

createSwatchGrid(2, 2, swatchBox);

createBlankGrid(30, 30, gridBox);



//function fillSwatchBox (container){}

// let indivColor = swatchBox.getElementsByClassName("cell");

// function createPalette () {
//     indivColor.forEach(function(cell, index){
//         swatchBox.style.backgroundColor = colors[index];
//     })
//  }





let eraseButton = document.createElement("button");
eraseButton.innerHTML = "Erase";
ppCanvas.appendChild(eraseButton);

eraseButton.addEventListener("click", function () {
    console.log("erase something")    
    // let myGrid = gridBox.querySelectorAll('.row2 .cell2');
    // for (let index = 0; index < myGrid.length; index++) {
    //     myGrid[index].style.backgroundColor = 'white';
    
});



let clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
ppCanvas.appendChild(clearButton);

clearButton.addEventListener("click", function () {
    console.log('hello');
   let myGrid = gridBox.querySelectorAll('.row2 .cell2');
    for (let index = 0; index < myGrid.length; index++) {
        myGrid[index].style.backgroundColor = 'white';
        
    } 
});