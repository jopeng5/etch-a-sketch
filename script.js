const sketchpad = document.querySelector('.sketchpad');
const button = document.querySelector('.make-new-grid');

function createSketchpad(size) { 
  sketchpad.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
  for (let i = 0; i < Math.pow(size, 2); i++) {
    let square = document.createElement('div');
    square.setAttribute('style', 'background-color: lightblue; border-bottom: 1px solid darkslategray; border-left: 1px solid darkslategray;');
    square.classList.add('grid-item');
    sketchpad.appendChild(square);
  }
}

function changeSquareColor() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(function(item) {
    item.addEventListener('mouseenter', (e) => {
      item.style.backgroundColor = 'lavender';
    });
  });  
};

function clearGrid() {
  sketchpad.innerHTML = '';
}

button.addEventListener('click', () => {
  let newSize = 0;
  do {
    newSize = prompt('Please enter the number of squares per side you\'d like  your new grid (1 to 100): ', '1 to 100 inclusive');
    if (newSize >= 1 && newSize <= 100) {
      clearGrid();
      createSketchpad(newSize);
      changeSquareColor();
      break;
     }
  } while (newSize < 1 || newSize > 100 || !(Number.isInteger(newSize)));
});

createSketchpad(16);
changeSquareColor();
