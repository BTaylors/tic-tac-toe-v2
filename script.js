
let gameState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    currentPlayer: "X",
    playerNames: ["Player 1", "Player 2"],
    currentPlayeridx: 0,
    wins: { 0: 0, 1: 0 },};
    winningCombinations: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
let board = document.querySelector(".board");
let currentPlayer = "X";
let win;
let reset = document.querySelector("#reset")
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.id = `${i}-${j}`;
        board.append(cell);
      }
    }
    
    // ### Make references to the DOM elements you want to click on
    
    // - Remember the concept of event delegation, you only need to put event listeners on parent elements.
        function renderBoard(){
        for (let i = 0; i < 3; i++){
          for (let j = 0; j <3; j++) {
            const cell = document.getElementById(`${i}-${j}`);
            cell.innerText = gameState.board[i][j];
          }
        }
      }    
      
function startNewGame(){  
  gameState.board = [
  [null, null, null],
  [null, null, null],
  [null ,null, null],
  ];
        renderBoard();
    };
    board.addEventListener("click", (event)=>{
        console.log(event.target.id);
        const row = event.target.id[0];
        const col = event.target.id[2];
        gameState.board[row][col] = gameState.currentPlayer;
        console.log("Game State:", gameState);
        renderBoard();
        switchPlayer();
    });

   document.getElementById('reset').addEventListener('click', (event)=>{
   startNewGame()
   });

   submit.addEventListener("click", (event)=>{
   
   });
    
   span2.addEventListener("click", (event)=>{
    displayScore();
   })
        
    function switchPlayer() {
        if (gameState.currentPlayer === "X") {
          gameState.currentPlayer = "O";
        } else {gameState.currentPlayer = "X"};
      }
    function makePlayer() {    
    if(gameState.currentPlayer === "X") {
    gameState.player2 = "O";
  } else if(gameState.currentPlayer === "X"){
    gameState.player1 = "O";
  }};
  makePlayer();

  function displayScore() {
    alert.player1score.innerText = `${gameState.playerNames[0]}'s score is ${gameState.wins[0]}`;
    player2score.innerText = `${gameState.playerNames[1]}'s score is ${gameState.wins[1]}`;
  }
    function checkWin() {win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;
      // Maybe this calls other helper functions?
      // checkRow()
      // checkColumn()
      // checkDiagonals()
    }
    checkWin();
    
    
    // ### What order do those functions need to execute in?
    
    // - Order of operations is very important! Think about the flow of your data, the game loop, and your user story!
    
    // <hr/>
    