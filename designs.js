// Select color input
// Select size input
let inputHeight = document.getElementById("inputHeight");
let inputWidth = document.getElementById("inputWidth");
let color = document.getElementById("colorPicker");
let pixelCanvas = document.getElementById("pixelCanvas");

color.addEventListener("click", function(){});

// When size is submitted by the user, call makeGrid()
let sizePicker = document.getElementById("sizePicker");
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

// fill/color the cells by getting the color value and set it as a background
function fillCell(){
    this.setAttribute("style", `background-color: ${color.value}`);
  }

// create the grid using for loops
function makeGrid() {
  // loop to create row
    for (let r=0; r<inputHeight.value; r++){
        const row = pixelCanvas.insertRow(r);
        // loop to create the cells of the grid
        for (let c=0; c<inputWidth.value; c++){
            const cell = row.insertCell(c);
            // use the addEventListener to fill in each cell when clicked
            cell.addEventListener("click", fillCell);
        }
    }
}

// clear the grid when new values is added
function clearGrid(){
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}
