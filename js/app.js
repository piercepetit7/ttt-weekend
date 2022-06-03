/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
// Step 1 - Define the required variables used to track the state of the game

  // a) Use a variable named `board` to represent the state of the squares on
  //    the board.
let board,
  // b) Use a variable named `turn` to track whose turn it is.
    turn,
  // c) Use a variable named `winner` to represent if anyone has won yet, or if 
  //    a tie has occurred.
    winner;


/*------------------------ Cached Element References ------------------------*/
// Step 2 - Store cached element references

  // a) In a constant called `squareEls`, store the nine elements representing 
  //    the squares on the page.
const squareEls = document.querySelectorAll(".squares")
const messageEl = document.querySelector("message")
  // b) In a constant called `messageEl`, store the element that displays the 
  //    game's status on the page.





/*----------------------------- Event Listeners -----------------------------*/
init()

function init(){
    board = [null,null,null,null,null,null,null,null,null]
    winner = null
    turn = 1
    render()
}
function render() {
    board.forEach(square, index => {
        if (square === 1) {
            squareEls[index].textContent = 'x'
        } else if (square === -1){
            squareEls[index].textContent = 'o'
        }  else (square === null) {
            squareEls[index].textContent = ''
        }
    });
}
if(winner === null) {
messageEl.textContent = `Now its ${turn}'s turn`
} else if (winner === "t") {
    messageEl.textContent = 'Yo its a Tie'
} else (winner === 1 || -1) {
    messageEl.textContent = `${winner} WINNER WINNER CHICKEN DINNER`
}

function handleClick(Event)





/*-------------------------------- Functions --------------------------------*/

