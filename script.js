// select container div
const contentDiv = document.querySelector('.content');

// listen for click on button 16 x 16
// const btnGrid16 = document.querySelector('.btn-grid-16');
// let num =
// btnGrid16.addEventListener('click', createDivs())

// add click event to 16 x 16 button and return grid size
const btn16 = document.querySelector('.btn-16');

function getGridSize() {
  console.log(parseInt(btn16.textContent.slice(0,2),16)); 
};

btn16.addEventListener('click', getGridSize);


// // function to create child divs inside content div
// function createDivs(num) {
//   for (i = 0; i < num; i++) {
//     const gridItem = document.createElement('div');
//     contentDiv.appendChild(gridItem);
//     gridItem.classList.add('grid-item');
//   }
// }

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


