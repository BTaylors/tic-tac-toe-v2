
const gameState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    currentPlayer: "x",
    playerNames: ["Player 1", "Player 2"],
    currentPlayeridx: 0,
    wins: { 0: 0, 1: 0 },
    winningCombinations: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]};
  
      const board = document.querySelector(".board");
    let currentPlayer = 'X';
  
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
    
    board.addEventListener("click", (event) => {
      console.log(event.target);
      const idArray = event.target.id;
      console.log(idArray.split(''));
      const splitArray = idArray.split('');
      const row = parseInt(splitArray[0]);
      const col = parseInt(splitArray[2]); 
      gameState.board[row][col] = "X";
    console.log("Game State: ", gameState);
        renderBoard();
      // Figure out how to get the coordinates off event object (e.target.value)
      // Use those coordinates to reference indexes in our gameState.board
      // Set the position in our board to the current player
    });
  
    function renderBoard(){
      for (let i = 0; i < 3; i++){
        for (let j = 0; j <3; j++) {
          const cell = document.getElementById(`${i}-${j}`);
          cell.innerText = gameState.board[i][j];
        }
      }
    }
    renderBoard();
  
    function startNewGame() {
		score = {
			"X": 0,
			"O": 0,
		};
		moves = 0;
		turn = "X";
		boxes.forEach(function (cell) {
			cell.innerHTML = EMPTY;
		});
	}
    startNewGame();
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
        if (gameState.currentPlayer === "x") {
          gameState.currentPlayer = "o";
        } else if (gameState.currentPlayer === "o") {
          gameState.currentPlayer = "x";
        }
        renderBoard();
        gameState.currentPlayeridx =
          (gameState.currentPlayeridx + 1) % gameState.playerNames.length;
          renderBoard();
      }
    switchPlayer();

    function switchMarkers() {
      gameState.move++;
      if (gameState.move % 2 === 0) {
        return 'X';
      }
      else {
        return 'O'
      }
      }
      switchMarkers();
  
  
    function makePlayer() {    
    //   const player1 = newPlayer(prompt("Choose player 1 name :")); // Create player 1
    //   const player2 = newPlayer(prompt("Choose player 2 name :")); // Create player 2
    if(gameState.currentPlayer === "X") {
    gameState.player2 = "O";
  } else if(gameState.currentPlayer === 'player2'){
    gameState.player1 = "O";
  }};
  makePlayer();

  function resetBoard(){
    
  }
    function checkWin() {
      // Maybe this calls other helper functions?
      // checkRow()
      // checkColumn()
      // checkDiagonals()
    }
    
    
    // ### What order do those functions need to execute in?
    
    // - Order of operations is very important! Think about the flow of your data, the game loop, and your user story!
    
    // <hr/>
    