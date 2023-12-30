function displayController() {
  const gameBoard = () => GameBoard;
  const boardElement = document.getElementById("board");
  const startButton = document.getElementById("start");
  const restartButton = document.getElementById("restart");
  const playerOneNameInput = document.getElementById("playerNameOne");
  const playerTwoNameInput = document.getElementById("playerNameTwo");
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
    let playerOne = playerOneNameInput.value || "Player One";
    let playerTwo = playerTwoNameInput.value || "Player Two";
    let players = [
      {
        name: playerOne,
        token: "O",
      },
      {
        name: playerTwo,
        token: "X",
      },
    ];

    initializeBoard();
    gameActive = true;

    activePlayer = players[1];
    statusElement.textContent = `${activePlayer.name}'s turn`;
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
        activePlayer === players[0] ? players[1] : players[0]
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

// console edition
// function GameBoard() {
//   const rows = 3;
//   const columns = 3;
//   const board = [];

//   for (let i = 0; i < rows; i++) {
//     board[i] = [];
//     for (let j = 0; j < columns; j++) {
//       board[i].push(Cell());
//     }
//   }

//   const getBoard = () => board;

//   const placeToken = (row, column, player) => {
//     const availableCells = board
//       .filter((row) => row[column].getValue() === 0)
//       .map((row) => row[column]);

//     if (!availableCells) return;
//     board[row][column].addToken(player);
//   };

//   const printBoard = () => {
//     const boardWithCellValues = board.map((row) =>
//       row.map((cell) => cell.getValue())
//     );
//     console.log(boardWithCellValues);
//   };

//   return { getBoard, placeToken, printBoard };
// }

// function Cell() {
//   let value = 0;

//   const addToken = (player) => {
//     value = player;
//   };

//   const getValue = () => value;

//   return {
//     addToken,
//     getValue,
//   };
// }

// function GameController(
//   playerOneName = "Player One",
//   playerTwoName = "Player Two"
// ) {
//   const board = GameBoard();

//   const players = [
//     {
//       name: playerOneName,
//       token: "O",
//     },
//     {
//       name: playerTwoName,
//       token: "X",
//     },
//   ];

//   let activePlayer = players[0];

//   const switchPlayerTurn = () => {
//     activePlayer = activePlayer === players[0] ? players[1] : players[0];
//   };
//   const getActivePlayer = () => activePlayer;

//   const printNewRound = () => {
//     board.printBoard();
//     console.log(`${getActivePlayer().name}'s turn`);
//   };

//   const playRound = (row, column) => {
//     console.log(
//       `Dropping ${
//         getActivePlayer().name
//       }'s token into ${row} row and ${column} column...`
//     );
//     board.placeToken(row, column, getActivePlayer().token);

//     switchPlayerTurn();
//     printNewRound();
//   };

//   return { playRound, getActivePlayer };
// }
