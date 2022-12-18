// select container div
const contentDiv = document.querySelector('.content');

const numOfDivs = 256;


// function to create child divs inside containerDiv
function createDivs(num) {
  for (i = 0; i < num; i++) {
    let gridItem = document.createElement('div');
    contentDiv.appendChild(gridItem);
    gridItem.classList.add('grid-item');
  }
}

function changeDivColor() {
  let gridItems = document.querySelectorAll('.grid-item');
  // need to fix forEach to target each div
//   gridItems.forEach(
//     gridItems.addEventListener('mouseover', function addHoverColor(e) {
//       gridItems.classList.add('hover');
//     }); 
//   );
// };

createDivs(numOfDivs);
changeDivColor();


