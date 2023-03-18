const board = document.querySelector(".board");
const reset = document.querySelector("#resetButton");
let playerNames = ["Player 1", "Player 2"];
const player1 = document.querySelector("#player1-Name");
const player2 = document.querySelector("#player2-Name");
let scoreboard = document.querySelector("#scoreboard");
const cell = document.querySelector(".cell");

const gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayer: "X",
  playerNames: ["Player 1", "Player 2"],
  currentPlayeridx: 0,
  wins: { 0: 0, 1: 0 },
};
const form = document.getElementById("form");
const playerStatus = document.querySelector("#playerStatus");
const player1score = document.querySelector("#player1score");
const player2score = document.querySelector("#player2score");

  // let winningCombinations = [
  //   [0-0, 0-1, 0-2],
  //   [1-0, 1-1, 1-2],
  //   [2-0, 2-1, 2-2],
  //   [0-0, 1-0, 2-0],
  //   [1-0, 1-1, 1-2],
  //   [2-0, 2-1, 2-2],
  //   [0-0, 1-1, 2-2],
  //   [0-2, 1-1, 2-0],
  // ];
  // let winningCombos = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6], 
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]
  //   ];

function renderGame(){
  board.innerHTML = " ";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell")
      cell.id = `${i}-${j}`;
      board.append(cell);
    };
  }};
  renderGame();
renderBoard();


function renderBoard(){
      for (let i = 0; i < 3; i++){
        for (let j = 0; j <3; j++) {
          const cell = document.getElementById(`${i}-${j}`);
          cell.innerText = gameState.board[i][j];
        }
      }
    };
renderBoard();
displayScore();

function switchPlayer() {
  if (gameState.currentPlayer === "X") {
  gameState.currentPlayer = "O";
  } else {gameState.currentPlayer = "X"};
  gameState.currentPlayeridx = (gameState.currentPlayeridx + 1) % gameState.playerNames.length;
  };

function startNewGame(){  
gameState.board = [
[null, null, null],
[null, null, null],
[null ,null, null],
];
      renderBoard();
};


board.addEventListener("click", (event)=>{
      let row = event.target.id[0];
      let col = event.target.id[2];
      if(gameState.board[row][col] === null){
      gameState.board[row][col] = gameState.currentPlayer;
      renderBoard();
      switchPlayer()
      playerStatus.innerText = "It is " + gameState.currentPlayer + "'s turn";
  };
});


reset.addEventListener('click', (event)=>{
startNewGame()
console.log('click');
});

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  gameState.player1 = event.target[0].value;
  gameState.player2 = event.target[1].value;
  player1score.innerText = `${gameState.playerNames[0]}'s score: 0`;
  player2score.innerText = `${gameState.playerNames[1]}'s score: 0`;
});



function displayScore() {
  playerStatus.innerText = `It is ${gameState.currentPlayer}'s turn`;
  player1score.innerText = `${gameState.playerNames[0]}'s score is ${gameState.wins[0]}`;
  player2score.innerText = `${gameState.playerNames[1]}'s score is ${gameState.wins[1]}`;
};
  renderBoard();
  renderGame();




document.getElementById('resetScoreboard').addEventListener("click", (event) => {
  player1score.innerText = `${gameState.p1}'s score is 0`;
  player2score.innerText = `${gameState.p2}'s score is 0`;
  gameState.wins[0] = 0;
  gameState.wins[1] = 0;
});


function checkWin() {
let hasWon = false;
for (let i = 0; i < 3; i++) {
  if (
    gameState.board[i][0] !== null &&
    gameState.board[i][0] === gameState.board[i][1] &&
    gameState.board[i][1] === gameState.board[i][2]
  ) {
    hasWon = true;
}}};

function checkRow(){
  for (let i = 0; i < 3; i++) {
    if (
      gameState.board[i][0] !== null &&
      gameState.board[i][0] === gameState.board[i][1] &&
      gameState.board[i][1] === gameState.board[i][2]) 
      {
      hasWon = true;
    };
  }};


function checkColumn(){  for (let i = 0; i < 3; i++) {
  if (
    gameState.board[0][i] !== null &&
    gameState.board[0][i] === gameState.board[1][i] &&
    gameState.board[1][i] === gameState.board[2][i]
  ) {
    hasWon = true;
  };
}};

function checkDiagonals(){
  if (
    gameState.board[0][0] !== null &&
    gameState.board[0][0] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][2]
  ) {
    hasWon = true;
  }
  if (
    gameState.board[0][2] !== null &&
    gameState.board[0][2] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][0]
  ) {
    hasWon = true;
  } else {
    gameStatus.innerText = "Draw!";
  }
  if (hasWon) {
    let playerName = gameState.playerNames[gameState.currentPlayeridx];
    gameStatus.innerText = `${playerName}'s wins`;
    gameState.wins[gameState.currentPlayeridx]++;
  }};
  checkRow();
  checkColumn();
  checkDiagonals();  
  checkWin();
  startNewGame();

  
  // ### What order do those functions need to execute in?
  
  // - Order of operations is very important! Think about the flow of your data, the game loop, and your user story