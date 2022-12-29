const grid = document.querySelector('.grid');
const button = document.querySelector('.btn-16');

// find grid size
function setGridSize(btn) {
  return size = parseInt(btn.textContent.slice(0,2));
};


function createGrid(size) { 
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;  

  for (let i = 0; i < Math.pow(size, 2); i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    grid.appendChild(gridElement);
  }
}

createGrid(setGridSize(button));

// // change div color when mouseover
// function changeDivColor() {
//   const gridItem = document.querySelectorAll('.grid-item');
//   gridItem.forEach(function(item) {
//     item.addEventListener('mouseover', function() {
//       item.classList.add('hover');
//       });
//   });
// };

// createDivs(numOfDivs);
// changeDivColor();


