
const game = new Game()
const bingoButton = document.querySelector('#bingo-btn')
const bingoNumber = document.querySelector('#bingo-number')

handleClick = () => {
    bingoNumber.innerHTML = game.pickNumber()

}


bingoButton.addEventListener('click', handleClick)