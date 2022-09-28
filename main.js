const gameboardObj = (() => {
  const gameboard = Array(9).fill(" ");

  const renderBoard = () => {
    const allGameSpaces = document.querySelectorAll(".game-space");
    allGameSpaces.forEach((gamespace, index) =>
      gamespace.addEventListener("click", (event) => {
        event.target.textContent = playerOne.symbol;
        gameboardObj.gameboard[index] = playerOne.symbol;
      })
    );
  };

  return { gameboard, renderBoard };
})();

gameboardObj.renderBoard();

const players = (name, symbol) => {
  return { name, symbol };
};

const displayController = (() => {
  return {};
})();

console.log(gameboardObj.gameboard);

const playerOne = players("felix", "X");
const playerTwo = players("brenda", "X");

/*
 - track players turn 
 - place symbol on board when player clicks on it
 -check if someone has won after each turn 
 -check if it is a tie after all the spaces have been filled 
 -reset the game 
 -announce the winner

*/
