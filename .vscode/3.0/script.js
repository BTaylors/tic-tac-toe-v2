const gameState = {
    board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  currentPlayeridx: 0,
  currentPlayer: "X",
  playerNames: ["Player 1, Player 2"],
  // player1score: 0,
  // player2score: 0,
  
  wins: { 0: 0, 1: 0 },
};

function renderBoard(){
    for (let i = 0; i < 3; i++){
      for (let j = 0; j <3; j++) {
        const cell = document.getElementById(`${i}-${j}`);
        cell.innerText = gameState.board[i][j];
      }
    }
  };

  function switchPlayer() {
    if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
    } else {gameState.currentPlayer = "X"};
    };

    function startNewGame(){  
        gameState.board = [
        [null, null, null],
        [null, null, null],
        [null ,null, null],
        ];
              renderBoard();
        };

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
    // if(gameState.cell.innerText == "X") {
    //   return;}
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
