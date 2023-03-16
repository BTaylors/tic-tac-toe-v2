let turn = "X";
let wins;
const cell = document.querySelector(".cell");
let board = document.querySelector(".board");
let reset = document.querySelector("#resetButton");
let submit = document.querySelector("#submitName");
let p1 = document.querySelector("#player1Name");
let p2 = document.querySelector("#player2Name");
const scoreboard = document.querySelector("#scoreboard");
const player1Form = document.querySelector("#submitName");
const form = document.getElementById("form1");
const log = document.getElementById("log");
const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayeridx: 0,
  currentPlayer: "X",
  playerNames: ["p1, p2"],
  // player1score: 0,
  // player2score: 0,
  wins: { 0: 0, 1: 0 },};

  const winningCombinations = [
    [0-0, 0-1, 0-2],
    [1-0, 1-1, 1-2],
    [2-0, 2-1, 2-2],
    [0-0, 1-0, 2-0],
    [1-0, 1-1, 1-2],
    [2-0, 2-1, 2-2],
    [0-0, 1-1, 2-2],
    [0-2, 1-1, 2-0]
  ];
  // const winningCombos = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6], 
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]
  //   ];


  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell")
      cell.id = `${i}-${j}`;
      board.append(cell);
    };
  };

function renderBoard(){
      for (let i = 0; i < 3; i++){
        for (let j = 0; j <3; j++) {
          const cell = document.getElementById(`${i}-${j}`);
          cell.innerText = gameState.board[i][j];
        }
      }
    };

function displayScore() {
  player1score.innerText = `${gameState.player1Name}'s score is ${gameState.wins[0]}`;
  player2score.innerText = `${gameState.player1Name}'s score is ${gameState.wins[1]}`;
};
displayScore();

function switchPlayer() {
  if (gameState.currentPlayer === "X") {
  gameState.currentPlayer = "O";
  } else {gameState.currentPlayer = "X"};
  };
// function displayNames(){
//   player1Name = `${gameState.p1}`;
//   p2.innerText = `${gameState.player2Score}`;
// }
function startNewGame(){  
gameState.board = [
[null, null, null],
[null, null, null],
[null ,null, null],
];
      renderBoard();
};

function checkWin() {
checkRow();
checkColumn();
checkDiagonals();
};
checkWin(); 

function checkRow(){};
function checkColumn(){};
function checkDiagonals(){};
// function addName () {
//   let userName = document.getElementByID(player1Name);
//   let userName2 = document.getElementbyID(player2Name);
// };
// addName();


reset.addEventListener('click', (event)=>{
startNewGame()
});

document.getElementById('resetScoreboard').addEventListener("click", (event) => {
  player1score.innerText = `${gameState.p1}'s score is 0`;
  player2score.innerText = `${gameState.p2}'s score is 0`;
  gameState.wins[0] = 0;
  gameState.wins[1] = 0;
});

board.addEventListener("click", (event)=>{
      const row = event.target.id[0];
      const col = event.target.id[2];
      gameState.board[row][col] = gameState.currentPlayer;
      // if(gameState.board.innerText != "") {
      //   return;
      // };
      // if (gameState.currentPlayer = "O") {
      //   return "O";
      // };
      // trying to prevent multiple markers from being placed in the same cell.
      renderBoard();
      switchPlayer();
  });

player1Form.addEventListener("submit", (event) => {
  event.preventDefault();
  gameState.playerNames[0] = event.target[0].value;
  gameState.playerNames[1] = event.target[1].value;
  player1score.innerText = `${gameState.playerNames[0]}'s score: 0`;
  player2score.innerText = `${gameState.playerNames[1]}'s score: 0`;
  playerStatus.innerText = gameState.playerNames[0] + "'s turn";
});



// submit.addEventListener('click',(event)=>{
// submitName();
// displayNames();

// });




// displayNames();



    // Maybe this calls other helper functions?
    // checkRow()
    // checkColumn()
    // checkDiagonals()


  
  
  // ### What order do those functions need to execute in?
  
  // - Order of operations is very important! Think about the flow of your data, the game loop, and your user story