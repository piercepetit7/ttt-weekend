/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8], // rows
    [0, 3, 6],[1, 4, 7],[2, 5, 8],// col
    [0, 4, 8],[2, 4, 6] //Xs
]


/*---------------------------- Variables (state) ----------------------------*/
// Step 1 - Define the required variables used to track the state of the game

  // a) Use a variable named `board` to represent the state of the squares on
  //    the board.
let board
  // b) Use a variable named `turn` to track whose turn it is.
let turn
  // c) Use a variable named `winner` to represent if anyone has won yet, or if 
  //    a tie has occurred.
let winner


/*------------------------ Cached Element References ------------------------*/
// Step 2 - Store cached element references

  // a) In a constant called `squareEls`, store the nine elements representing 
  //    the squares on the page.
const squareEls = document.querySelectorAll(".squares")
const messageEl = document.querySelector("#message")
  // b) In a constant called `messageEl`, store the element that displays the 
  //    game's status on the page.
const resetBtn = document.querySelector('#reset-button')





/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.board').addEventListener('click',handleClick)
resetBtn.addEventListener('click', init)






/*-------------------------------- Functions --------------------------------*/
init()

function init(){
    board = [null,null,null,null,null,null,null,null,null]
    turn = 1
    winner = null
    render()
}
//console.log(init)

function render() {
    board.forEach(function(square, index) {
if (square === 1) {
    squareEls[index].textContent = 'X'
} else if (square === -1) {
    squareEls[index].textContent = 'O'
} else if (square === null){
    squareEls[index].textContent = ''
}
})
if(winner === null) {
    if (turn === 1) {
        messageEl.textContent = "It is player X's turn"
    } else if (turn === -1) {
        messageEl.textContent = "It is player O's turn"
    }
} else if (winner === 'T') {
    messageEl.textContent = "Yo! it's a tie"
} else {
    messageEl.textContent = `${winner} WINNER WINNER CHICKEN DINNER!!`
}
}
function handleClick(evt) {
    let sqIdx = parseInt(evt.target.id.replace('sq',''))
    if(board[sqIdx] !== null) {
        return
    }else if (winner !== null){
        return
    } else {
        board[sqIdx] = turn
    }
    turn = turn * -1
    getWinner()
    render()
}

function getWinner() {
    let sum
    for (let i = 0; i < winningCombos.length; i++){
    sum = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] 
    if (sum === 3){
        winner = "X"
        return
    } else if (sum === -3){
        winner = 'O'
        return
    } else if (board.includes(null) === false){
        winner =  'T'
        return
    }else {
        winner = null
    }
    } 
} 




