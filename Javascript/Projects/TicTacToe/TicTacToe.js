function displayController() {
  const gameBoard = () => GameBoard;
  const boardElement = document.getElementById("board");
  const startButton = document.getElementById("start");
  const restartButton = document.getElementById("restart");
  const statusElement = document.getElementById("status");

  let gameActive = false;
  let activePlayer;
  let board;
  let players = [
    {
      name: "Player One",
      token: "O",
    },
    {
      name: "Player Two",
      token: "X",
    },
  ];

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", restartGame);

  function startGame() {
    initializeBoard();
    gameActive = true;

    activePlayer = players[0];
    // statusElement.textContent = `${activePlayer.name}'s turn`;
  }

  function restartGame() {
    initializeBoard();
    gameActive = true;
  }

  const initializeBoard = () => {
    boardElement.innerHTML = "";
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", handledCellClick);
        boardElement.appendChild(cell);
      }
    }
  };

  const handledCellClick = (event) => {
    if (gameActive) {
      const clickedCell = event.target;
      const row = clickedCell.dataset.row;
      const col = clickedCell.dataset.col;

      if (board[row][col] === "") {
        board[row][col] = activePlayer.token;
        clickedCell.textContent = activePlayer.token;

        if (checkWinner()) {
          alert(`${activePlayer.name} wins!`);
          gameActive = false;
        } else if (checkDraw()) {
          alert("It's a draw! Do you want to restart?");
          gameActive = false;
        } else {
          activePlayer = activePlayer === players[0] ? players[1] : players[0];
          updateGameStatus();
        }
      }
    }
  };

  const updateGameStatus = () => {
    if (gameActive) {
      statusElement.textContent = `${
        activePlayer.name === players[0].name
          ? players[0].name
          : players[1].name
      }'s turn`;
    }
  };

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        checkLine(board[i][0], board[i][1], board[i][2]) ||
        checkLine(board[0][i], board[1][i], board[2][i])
      ) {
        return true;
      }
    }

    if (
      checkLine(board[0][0], board[1][1], board[2][2]) ||
      checkLine(board[0][2], board[1][1], board[2][0])
    ) {
      return true;
    }

    return false;
  };
  const checkLine = (a, b, c) => {
    return a !== "" && a === b && b === c;
  };
  const checkDraw = () => {
    return board.every((row) => row.every((cell) => cell != ""));
  };

  return {
    startGame,
    restartGame,
    initializeBoard,
    handledCellClick,
    updateGameStatus,
    checkWinner,
    checkDraw,
    checkLine,
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const game = displayController();
});
