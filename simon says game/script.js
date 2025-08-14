let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btncolor = ["yellow", "green", "purple", "orange"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.textContent = "Level: " + level;
  let random = Math.floor(Math.random() * 4);
  let randColor = btncolor[random];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(random);
  // console.log(randColor);
  // console.log(randbtn)
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randbtn);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function checkAnswer(idx) {
  // console.log(`current level:- ${level}`)
  // let idx=level-1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `game over!!! Your score was <b>${level}</b><br/> Press any key to restart`;
    
   document.querySelector('body').style.backgroundColor='red';
   setTimeout(function () {
    document.querySelector('body').style.backgroundColor='white';
   },150)
    reset();
  }
  }

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  
}
//add event listener to buttons
//random btn generation
function btnPressed() {
  let btn = this;
  console.log(this);
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  console.log(userSeq);
  checkAnswer(userSeq.length - 1);
}
//add event listener to buttons
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPressed);
}
