const players = (name, symbol) => {
  return { name, symbol };
};

const playerOne = players("felix", "X");
const playerTwo = players("brenda", "O");

const displayController = (() => {
  let playerOneTurn = true;
  const decidePlayerSymbol = () => {
    if (playerOneTurn) {
      return playerOne.symbol;
    } else {
      return playerTwo.symbol;
    }
  };

  const switchTurns = () => {
    playerOneTurn = !playerOneTurn;
  };
  return { decidePlayerSymbol, switchTurns };
})();

const gameboardObj = (() => {
  const gameboard = Array(9).fill(" ");

  const renderBoard = () => {
    const allGameSpaces = document.querySelectorAll(".game-space");
    allGameSpaces.forEach((gameSpace, index) =>
      gameSpace.addEventListener("click", (event) => {
        event.target.textContent = displayController.decidePlayerSymbol();
        gameboardObj.gameboard[index] = displayController.decidePlayerSymbol();
        displayController.switchTurns();
      })
    );
  };

  return { gameboard, renderBoard };
})();

gameboardObj.renderBoard();

console.log(gameboardObj.gameboard);

/*
 - track players turn 
 - place symbol on board when player clicks on it
 -check if someone has won after each turn 
 -check if it is a tie after all the spaces have been filled 
 -reset the game 
 -announce the winner

1. start the game by randomly assigning a symbol to each player and randomly generating who goes first
2. first person marks their spot, spot is taken, disable spot from being clicked, switch player turn 
3. after each players turn, check if there is a winner 
4. need to create logic that knows all the win cases 
5. If all the gamespaces are filled and there is no winner declare a tie
6. Add a reset button possibly?
7. If a player wins or if there is a tie, display a message stating such and then display a restart button or display the message and clicking anywhere on the screen will restart the game 

*/
