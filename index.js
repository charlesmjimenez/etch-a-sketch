// // create a 16 x 16 grid
// let gridSize = 16;

// const container = document.querySelector(".squares-container");
// const button = document.querySelector(".user-option");

// function createGrid(size) {
//   for (let i = 0; i < size; i++) {
//     let column = document.createElement("div");
//     column.classList.add("column");
//     console.log("Added div with class name column");
//     for (let j = 1; j <= size; j++) {
//       let row = document.createElement("div");
//       row.classList.add("row");
//       row.textContent = `${i},${j}`;
//       column.appendChild(row);
//     }
//     container.appendChild(column);
//   }
// }

// function resetGrid() {
//   while (container.firstChild) {
//     container.removeChild(container.lastChild);
//   }
// }

// container.addEventListener("mouseover", (event) => {
//   let square = event.target;
//   if (square.className === "row") {
//     square.classList.add("box");
//   }
//   console.log(square);
// });

// function userOption() {
//   let isValidInput = false;

//   while (!isValidInput) {
//     let userSize = Number(prompt("Please enter the size of the grid"));
//     if (userSize >= 0 || userSize <= 100) {
//       gridSize = userSize;
//       isValidInput = true;
//     }
//   }
//   resetGrid();
//   createGrid(gridSize);
// }

// button.addEventListener("click", userOption);

// createGrid(gridSize);

let gridSize = 16;
const CONTAINER = document.querySelector(".squares-container");
console.log("HAHAHA" + CONTAINER.offsetWidth);
function createGrid(size) {
  const width = CONTAINER.clientWidth / size + "px";
  const height = CONTAINER.clientWidth / size + "px";
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = width;
    square.style.height = height;
    CONTAINER.appendChild(square);
  }
}

function resetGrid() {
  while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.lastChild);
  }
}

function getUserInput() {
  let isValidInput = false;

  while (!isValidInput) {
    let userInput = Number(prompt("Please enter a number"));

    if (userInput >= 0 || userInput <= 100) {
      gridSize = userInput;
      isValidInput = true;
    }
  }
  resetGrid();
  createGrid(gridSize);
}

CONTAINER.addEventListener("mouseover", (event) => {
  if (event.target.className === "square") {
    event.target.classList.add("colour");
  }
});

document.querySelector(".user-option").addEventListener("click", getUserInput);

createGrid(gridSize);
