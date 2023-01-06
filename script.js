const sketchpad = document.querySelector('.sketchpad');

function createSketchpad(size) { 
  sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;  

  for (let i = 0; i < Math.pow(size, 2); i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'lightblue';
    sketchpad.appendChild(square);
  }
}

function deleteSketchpad() {
  let sketchpadDivs = document.querySelectorAll('div');
  console.log(sketchpadDivs);

}

createSketchpad(84);



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


