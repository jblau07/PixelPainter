const ppCanvas = document.getElementById("pixelPainter");
let isDown = false;
let gridBox = document.createElement("div");
gridBox.className = "gridBox";
ppCanvas.appendChild(gridBox);

let colors = ['grey', 'black', '#061247', '#2a4dcc', '#04dce8', '#00c66a', 'green', '#54ff00', 'yellow', 'orange', '#f76518', '#ff1900', '#d80020', '#ff0054', '#ff05ab', '#f605ff', 'violet', '#c87cff', '#7a46e2', '#5a0cf7'];
let colorMemory;

let swatchBox = document.createElement("div");
swatchBox.className = "swatchBox";
ppCanvas.appendChild(swatchBox);


// create swatch grid
function createSwatchGrid(x, y, element, ) {
	let counter = 0;

	for (let i = 1; i <= x; i++) {
		let row = document.createElement("div");
		row.className = "row";

		for (let j = 1; j <= y; j++) {
			let cell = document.createElement("div");
			cell.className = "cell";
			cell.style.backgroundColor = colors[counter++];
			row.appendChild(cell);

		}
		element.appendChild(row);
	}
};

// function to interact with swatch
swatchBox.addEventListener("click", function () {
	colorMemory = event.target.style.backgroundColor;
	console.log("swatch")
});
gridBox.addEventListener("mousedown", function () {
	isDown = true;
	console.log("mousedown")
});
gridBox.addEventListener("mouseup", function () {
	isDown = false;
	console.log("mouseup")
});

gridBox.addEventListener("click", function () {
	if (event.target.classList.contains("cell2"))
		event.target.style.backgroundColor = colorMemory;
});

gridBox.addEventListener("mouseover", function () {
	if (isDown === true && event.target.classList.contains("cell2")) {
		event.target.style.backgroundColor = colorMemory;
		console.log("paint")
	}
});

// create blank grid
function createBlankGrid(x, y, element) {
	for (let i = 1; i <= x; i++) {
		let row2 = document.createElement("div");
		row2.className = "row2";

		for (let j = 1; j <= y; j++) {
			let cell2 = document.createElement("div");
			cell2.className = "cell2";
			cell2.style.backgroundColor = "white";
			row2.appendChild(cell2);

		}
		element.appendChild(row2);
	}
};

createSwatchGrid(2, 10, swatchBox);

createBlankGrid(30, 100, gridBox);

let eraseButton = document.createElement("button");
eraseButton.id = "eraseButton"
eraseButton.innerHTML = "Erase";
ppCanvas.appendChild(eraseButton);

eraseButton.addEventListener("click", function () {
	console.log("erase something")
	colorMemory = "white";
});

let clearButton = document.createElement("button");
clearButton.id = "clearButton"
clearButton.innerHTML = "Clear";
ppCanvas.appendChild(clearButton);

clearButton.addEventListener("click", function () {
	console.log('all clear');
	let myGrid = gridBox.querySelectorAll('.row2 .cell2');
	for (let index = 0; index < myGrid.length; index++) {
		myGrid[index].style.backgroundColor = 'white';
	}
});
// easterEggs
eraseButton.addEventListener("dblclick", function () {
	window.location.href = "https://github.com/jblau07";
});
clearButton.addEventListener("dblclick", function () {
	window.location.href = "https://github.com/DODHI5";
});