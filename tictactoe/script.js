let boxes = document.querySelectorAll(".cell");
let btn = document.querySelector('.reset');
let currentPlayer = "X";
let gameActive = true;

let winningConditions = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,4,8],[2,4,6],
  [0,3,6],[1,4,7],[2,5,8]
];

// Event listeners for each cell
boxes.forEach(box => {
  box.addEventListener('click', handleClick);
});

// Reset button
btn.addEventListener('click', () => {
  boxes.forEach(box => {
    box.innerText = "";
  });
  currentPlayer = "X";
  gameActive = true;
});

// Handle player click
function handleClick(e){
  let box = e.target;
  
  if(box.innerText !== "" || !gameActive){
    return;
  }

  box.innerText = currentPlayer;
  displayResult();
}

// Check win or draw
function displayResult(){
  let win = false;

  for(let i = 0; i < winningConditions.length; i++){
    let [a, b, c] = winningConditions[i];
    let valA = boxes[a].innerText;
    let valB = boxes[b].innerText;
    let valC = boxes[c].innerText;

    if(valA === "" || valB === "" || valC === ""){
      continue;
    }
    if(valA === valB && valB === valC){
      win = true;
      break;
    }
  }

  if(win){
    alert("Player " + currentPlayer + " has won!");
    gameActive = false;
  }
  else if([...boxes].every(box => box.innerText !== "")){
    alert("Game is a draw!");
    gameActive = false;
  }
  else{
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}
