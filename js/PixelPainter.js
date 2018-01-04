let ppCanvas = document.getElementById("pixelPainter");

let gridBox = document.createElement("div")
//  swatchBox.style.backgroundColor = "blue";
gridBox.className = "gridBox";
ppCanvas.appendChild(gridBox);

let swatchBox = document.createElement("div");
swatchBox.style.backgroundColor = "blue";
swatchBox.className = "swatchBox";
ppCanvas.appendChild(swatchBox);

 function createGrid (x, y, element) {
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
    };

    createGrid(2, 2, swatchBox);

    let grid2 = createGrid(30, 30, gridBox);

    let eraseButton = document.createElement("button");
    eraseButton.innerHTML = "Erase";

    //  let body = document.getElementsByClassName("swatchBox");
    ppCanvas.appendChild(eraseButton);

    eraseButton.addEventListener("click", function () {
        alert("heyyy");
    });


    let clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear";

    let body2 = document.getElementById("pixelPainter");
    body2.appendChild(clearButton);

    clearButton.addEventListener("click", function () {
        alert("heyyy");
    });