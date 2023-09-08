// tictacscript.js
const board = document.getElementById("board");
const cells = board.getElementsByTagName("td");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

board.addEventListener("click", handleCellClick);

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (gameBoard[cellIndex] === "" && !checkWinner()) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${gameBoard[a]} wins!`);
            return true;
        }
    }

    if (!gameBoard.includes("")) {
        alert("It's a draw!");
        return true;
    }

    return false;
}
