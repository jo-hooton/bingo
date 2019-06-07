const game = new Game()
const api = new API()
const bingoButton = document.querySelector('#bingo-btn')
const bingoNumber = document.querySelector('#bingo-number')
const gif = document.querySelector('#gif')

handleClick = () => {
    newNumber = game.pickNumber()
    bingoNumber.innerHTML = newNumber
    renderGif(newNumber)
}

renderGif = number => {
    api.getGif(number)
    .then(url => gif.style.backgroundImage=`url(${url})`)
}


bingoButton.addEventListener('click', handleClick)