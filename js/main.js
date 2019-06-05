document.addEventListener('DOMContentLoaded', () => {
    const game = new Game()
    const bingoButton = document.querySelector('#bingo-btn')
    const bingoNumber = document.querySelector('#bingo-number')

    handleClick = () => {
        game.pickNumber
        const number = game.usedNumbers[-1]
        bingoNumber.innerHTML = number
    }


    bingoButton.addEventListener('click', handleClick)


  });