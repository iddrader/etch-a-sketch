function changeSize(){
    const rowsToDelete = document.querySelectorAll('.canvas-row');
    rowsToDelete.forEach(row => row.remove());
    const size = prompt("Enter the size of the canvas, maximum of 100", 16);
    if (size >= 100){
        return;
    }
    createCanvas(size);
}

function createCanvas(size){
    const canvas = document.querySelector('.canvas');

    for(let i = 0; i < size; i++) {
        const canvasRow = document.createElement('div');
        canvasRow.classList.add('canvas-row');
        canvas.appendChild(canvasRow);
        for(let j = 0; j < size; j++) {
            const canvasSquare = document.createElement('div');
            canvasSquare.classList.add('canvas-square');
            canvasRow.appendChild(canvasSquare);
        }
    }

    const squares = document.querySelectorAll('.canvas-square');

    squares.forEach(square => 
        square.addEventListener('mouseover', () => {
            square.classList.add('black')
        })
    )
}

function turnBlack(event){
    event.target.classList.add('black');
}

const sizeButton = document.querySelector('#change-size');
sizeButton.addEventListener('click', changeSize);

