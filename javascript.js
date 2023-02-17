//todo: add screenshot functionality; 
//add "white button" to delete content again (<-- done); 
//maybe add "perfect mode" that works with "click" instead of "mouseover";
//add user-option to select grid-size;

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {drawGrid()});

const container = document.querySelector('#container');

// to make the grid appear in a square. width has to be a multiple of squarediv 
// width/height + 1px per side per element for border. as a default it's (18px + 1 + 1). 50x50 grid
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '1000px';

const squareDivs = []

let globalColor = "black";

drawGrid();

const colors = document.querySelectorAll('.colorDiv')
colors.forEach(function(color) {
    color.addEventListener("click", () => {selectColor(color.id)})
})

function drawGrid() {
    if (squareDivs != []) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    for (let i=1; i<=2500; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.setAttribute('id', 'squareDiv' + i);
        squareDiv.style.width = "18px";
        squareDiv.style.height = "18px";
        squareDiv.style.border = "1px solid black";
        squareDivs.push(squareDiv);
        container.append(squareDiv);
        squareDiv.style.display = 'inline-block';
        squareDiv.addEventListener('mouseover', () => {changeColor(squareDiv)})
    }
}

function selectColor(color) {
    globalColor = color;
}

function changeColor(squareDiv, color) {
    squareDiv.style.backgroundColor = globalColor;
}

// the code below would change the behaviour so that a field changes its color back to white once you go over it twice

// function changeColor(squareDiv, color) {
//     if (squareDiv.style.backgroundColor != globalColor) {
//         squareDiv.style.backgroundColor = globalColor;
//     }
//     else {squareDiv.style.backgroundColor = "white"}
// }

