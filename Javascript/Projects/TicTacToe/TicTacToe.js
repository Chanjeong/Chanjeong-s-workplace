function GameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const placeToken = (row, column, player) => {
    const availableCells = board
      .filter((row) => row[column].getValue() === 0)
      .map((row) => row[column]);

    if (!availableCells) return;
    board[row][column].addToken(player);
  };

  const printBoard = () => {
    const boardWithCellValues = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    console.log(boardWithCellValues);
  };

  return { getBoard, placeToken, printBoard };
}

function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = GameBoard();

  const players = [
    {
      name: playerOneName,
      token: "O",
    },
    {
      name: playerTwoName,
      token: "X",
    },
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn`);
  };

  const playRound = (row, column) => {
    console.log(
      `Dropping ${
        getActivePlayer().name
      }'s token into ${row} row and ${column} column...`
    );
    board.placeToken(row, column, getActivePlayer().token);

    const winner = () => checkWinner;
    if (winner) {
      alert(`The Winner is ${getActivePlayer().name}! Do you want to restart?`);
    } else {
      switchPlayerTurn();
      printNewRound();
    }
  };

  const checkWinner = () => {
    const winPatterns = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      const cellA = board[a[0]][a[1]];
      const cellB = board[b[0]][b[1]];
      const cellC = board[c[0]][c[1]];
      if (cellA !== 0 && cellA == cellB && cellA == cellC) {
        return getActivePlayer();
      }
    }

    if (board.flat().every((cell) => cell.getValue() !== 0)) {
      alert("The Game is Over! Draw! Do you want to restart?");
      return null;
    }
  };

  return { playRound, getActivePlayer, checkWinner };
}

// function displayController() {
//   const startButton = document.getElementById("start");
//   const restartButton = document.getElementById("restart");

//   startButton.addEventListener("click", () => {
//     const playerOne = document.getElementById("playerNameOne").value;
//     const playerTwo = document.getElementById("playerNameTwo").value;

//     const gameController = GameController(playerOne, playerTwo);

//     document.getElementById("playerNameOne").value = "";
//     document.getElementById("playerNameTwo").value = "";
//   });
//   const board = document.querySelector("#board");

// }

const game = GameController();
