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

  const placeToken = (column, player) => {
    const availableCells = board
      .filter((row) => row[column].getValue() === 0)
      .map((row) => row[column]);

    if (!availableCells) return;

    const lowestRow = availableCells.length - 1;
    board[lowestRow][column].addToken(player);
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

  const playRound = (column) => {
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.placeToken(column, getActivePlayer().token);

    switchPlayerTurn();
    printNewRound();
  };

  printNewRound();

  return { playRound, getActivePlayer };
}

function displayController() {
  const getGameController = () => GameController;
  const activePlayer = getGameController.getActivePlayer;

  const square = document.querySelector("#cell");
  const board = document.querySelector("#board");
  square.addEventListener("click", () => {
    const randomColumn = Math.floor(Math.floor(Math.random() * 3));
    cell.innerHTML = `${activePlayer.name}'s token into column ${randomColumn}`;
    cell.classList.add(
      activePlayer.token === "O" ? "player-one" : "player-two"
    );
  });
}

const game = displayController();
