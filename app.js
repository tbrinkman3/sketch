const container = document.getElementById("container");

//Create grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

makeRows(16,16);

//Fill in squares
const squares = document.querySelectorAll('.grid-item');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
    })
})