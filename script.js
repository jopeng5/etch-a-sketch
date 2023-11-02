const sketchpad = document.querySelector('.sketchpad');

function createSketchpad(size) { 
  sketchpad.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);

  for (let i = 0; i < Math.pow(size, 2); i++) {
    let square = document.createElement('div');
    square.setAttribute('style', 'background-color: lightblue; border: 1px solid black;');
    square.classList.add('grid-item', `${i}`);
    sketchpad.appendChild(square);
  }
}

function changeDivColor() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(function(item) {
    item.addEventListener('mouseenter', (e) => {
      item.style.backgroundColor = '#ffa69e';
    });
  });  
};

function makeNewGrid() {
  
}

createSketchpad(3);
changeDivColor();


