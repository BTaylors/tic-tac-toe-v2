const board = document.querySelector(".board");
const reset = document.querySelector("#resetButton");
const player1 = document.querySelector("#player1-Name");
const player2 = document.querySelector("#player2-Name");
const scoreboard = document.querySelector("#scoreboard");
const cell = document.querySelector(".cell");
const winStatus = document.querySelector("#winStatus");
const playerStatus = document.querySelector("#playerStatus");
const player1score = document.querySelector("#player1score");
const player2score = document.querySelector("#player2score");
const form = document.getElementById("form");

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
	hasWon: false,
};

function renderGame() {
	board.innerHTML = " ";
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			let cell = document.createElement("div");
			cell.classList.add("cell");
			cell.id = `${i}-${j}`;
			board.append(cell);
		}
	}
}
renderGame();

function renderBoard() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const cell = document.getElementById(`${i}-${j}`);
			cell.innerText = gameState.board[i][j];
		}
	}
}
renderBoard();
displayScore();

function switchPlayer() {
	if (gameState.currentPlayer === "X") {
		gameState.currentPlayer = "O";
	} else {
		gameState.currentPlayer = "X";
	}
	gameState.currentPlayeridx =
		(gameState.currentPlayeridx + 1) % gameState.playerNames.length;
}

function startNewGame() {
	gameState.board = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	renderBoard();
}

board.addEventListener("click", (event) => {
	let row = event.target.id[0];
	let col = event.target.id[2];
	if (gameState.board[row][col] === null) {
		gameState.board[row][col] = gameState.currentPlayer;
		renderBoard();
		checkWin();
		switchPlayer();
		playerStatus.innerText = "It is " + gameState.currentPlayer + "'s turn";
	}
});

reset.addEventListener("click", (event) => {
	startNewGame();
	console.log("click");
});

form.addEventListener("submit", (event) => {
	event.preventDefault();
	gameState.playerNames[0] = event.target[0].value;
	gameState.playerNames[1] = event.target[1].value;
	player1score.innerText = `${gameState.playerNames[0]}'s score: ${gameState.wins[0]}`;
	player2score.innerText = `${gameState.playerNames[1]}'s score: ${gameState.wins[1]}`;
	renderBoard();
	renderGame();
});

function displayScore() {
	playerStatus.innerText = `It is ${gameState.currentPlayer}'s turn`;
	player1score.innerText = `${gameState.playerNames[0]}'s score is ${gameState.wins[0]}`;
	player2score.innerText = `${gameState.playerNames[1]}'s score is ${gameState.wins[1]}`;
	if (gameState.hasWon === true) {
		winStatus.innerText = `${gameState.currentPlayer} wins!`;
	}
}
renderBoard();
renderGame();

function checkRow() {
	for (let i = 0; i < 3; i++) {
		if (
			gameState.board[i][0] !== null &&
			gameState.board[i][0] === gameState.board[i][1] &&
			gameState.board[i][1] === gameState.board[i][2]
		) {
			gameState.hasWon = true;
		}
	}
}

function checkColumn() {
	for (let i = 0; i < 3; i++) {
		if (
			gameState.board[0][i] !== null &&
			gameState.board[0][i] === gameState.board[1][i] &&
			gameState.board[1][i] === gameState.board[2][i]
		) {
			gameState.hasWon = true;
		}
	}
}

function checkDiagonals() {
	if (
		gameState.board[0][0] !== null &&
		gameState.board[0][0] === gameState.board[1][1] &&
		gameState.board[1][1] === gameState.board[2][2]
	) {
		gameState.hasWon = true;
	}
	if (
		gameState.board[0][2] !== null &&
		gameState.board[0][2] === gameState.board[1][1] &&
		gameState.board[1][1] === gameState.board[2][0]
	) {
		gameState.hasWon = true;
	} else {
		winStatus.innerText = "Draw!";
	}
	if ((gameState.hasWon = true)) {
		let playerName = gameState.playerNames[gameState.currentPlayeridx];
		winStatus.innerText = `${playerName} wins!`;
		gameState.wins[gameState.currentPlayeridx]++;
	}
}

function checkWin() {
	checkRow();
	checkColumn();
	checkDiagonals();
	displayScore();
}

// ### What order do those functions need to execute in?

// - Order of operations is very important! Think about the flow of your data, the game loop, and your user story
