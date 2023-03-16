
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
      // Figure out how to get the coordinates off event object (e.target.value)
      // Use those coordinates to reference indexes in our gameState.board
      // Set the position in our board to the current player
    });

   document.getElementById('reset').addEventListener('click', (event)=>{
   startNewGame()
   });
    
        

// trying to clear the board





    // ### Rendering the current state of the game information to the DOM
    
    // - Be able to write functions which will loop over your board in state, and reflect the data acordingly to the page
    
    function renderGame() {
      // let cell = [i];
      // let i = 0;
      // let winner = 'no';
      // while ((i < gameState.length) && (winner != 'yes'))
      // {
      //   let lastPlayer = '';
      //   let location = '';
      //       }
        }
      // Call this function after you've changed your state values
      // Make references to DOM elements, and set the innerText,
      // or innerHTML to reflect our gameState.board
    // - Reference the demo going over editing state, and rendering the board to the DOM -> [Loop Demo][loopdemo]
    
    // ### What other functions may you need?
    function switchPlayer() {
        if (gameState.currentPlayer === "X") {
          gameState.currentPlayer = "O";
        } else {gameState.currentPlayer = "X"};
      }

    // function switchMarkers() {
    //   gameState.move++;
    //   if (gameState.move % 2 === 0) {
    //     return 'X';
    //   }
    //   else {
    //     return 'O'
    //   }
    //   }
    //   switchMarkers();
  
  
    function makePlayer() {    
    //   const player1 = newPlayer(prompt("Choose player 1 name :")); // Create player 1
    //   const player2 = newPlayer(prompt("Choose player 2 name :")); // Create player 2
    if(gameState.currentPlayer === "X") {
    gameState.player2 = "O";
  } else if(gameState.currentPlayer === "X"){
    gameState.player1 = "O";
  }};
  makePlayer();

  function resetBoard(){

    
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
    