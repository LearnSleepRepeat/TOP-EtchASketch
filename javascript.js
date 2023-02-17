//todo: add screenshot functionality; add "white button" to delete content again; maybe add "perfect mode" that works with "click" instead of "mouseover"

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {drawGrid()});

const container = document.querySelector('#container');

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '1000px';

const squareDivs = []

let globalColor = "black"

drawGrid()

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
    //squareDiv.textContent = `${i}`;
    squareDivs.push(squareDiv);
    container.append(squareDiv);
    squareDiv.style.display = 'inline-block';
    squareDiv.addEventListener('mouseover', () => {changeColor(squareDiv)})
}
}

function selectColor(color) {
    globalColor = color
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
