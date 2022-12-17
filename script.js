// select container div
const contentDiv = document.querySelector('.content');

const numOfDivs = 4;


// function to create child divs inside containerDiv
function createDivs(num) {
  for (i = 0; i < num; i++) {
    let gridItem = document.createElement('div');
    contentDiv.appendChild(gridItem);
    gridItem.classList.add('grid-item');
  }
}

createDivs(numOfDivs);


