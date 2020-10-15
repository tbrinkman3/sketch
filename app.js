function createGrid(size) {
    const gameBoard = document.querySelector('#gamezone');
    const container = document.createElement("div");
    gameBoard.appendChild(container).id = 'container';
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let i=0; i < (size ** 2); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item"
    };
};

createGrid(16);
color();



const reset = document.getElementById('reset').addEventListener('click', function() {;

    const div = document.querySelector('#container');
    div.remove('div');
    let size = prompt('Size of canvas? (pixels)');
    createGrid(size);
    color();
})

function color() {
    const gridBits = document.querySelectorAll('.grid-item');
    gridBits.forEach((bit) => {
        bit.addEventListener("mouseover", function() {
            bit.style.backgroundColor = 'black';
        })
    })
};