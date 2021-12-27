const container = document.getElementById('container');
let sizeValue = document.getElementById('sizeSlider');
let sizeDisplay = document.getElementById('sizeValue')
const pixels = document.querySelectorAll('.grid-item');
const eraser = document.getElementById('eraser');
const sketch = document.getElementById('sketch');
const clear = document.getElementById('clear');

function makeRows(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let index = 0; index < (size * size); index++) {
        let cell = document.createElement('div');
        cell.innerText = ('');
        container.appendChild(cell).className = 'grid-item';
    }
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', () => {
        gridPixel.style.backgroundColor = 'black'
    }));
    sizeDisplay.innerHTML = size
    console.log(size);
};

function changeSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeRows(sizeValue.value);
};
function clearAllBackground() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = 'white');
};
function eraserGrid() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', () => {
        gridPixel.style.backgroundColor = 'white'
    }));
};
function sketchGrid() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', () => {
        gridPixel.style.backgroundColor = 'black'
    }));
};

makeRows(16) //default grid

sizeValue.addEventListener('input', changeSize);
clear.addEventListener('click', clearAllBackground);
eraser.addEventListener('click', eraserGrid);
sketch.addEventListener('click', sketchGrid);