const game = new Game()
const api = new API()
const bingoButton = document.querySelector('#bingo-btn')
const bingoNumber = document.querySelector('#bingo-number')
const bingoNumberText = document.querySelector('#bingo-number-text')
const gif = document.querySelector('#gif')

handleClick = () => {
    newNumber = game.pickNumber()
    bingoNumberText.innerHTML = newNumber
    renderGif(newNumber)
    animateCSS(bingoNumber, 'heartBeat')
    animateCSS(bingoButton, 'pulse')
    animateCSS(bingoNumberText, 'bounceInUp')
    animateCSS(gif, 'shake')
}

renderGif = number => {
    phrase = game.getPhrase(number)
    api.getGif(phrase)
    .then(url => gif.style.backgroundImage=`url(${url})`)
}


bingoButton.addEventListener('click', handleClick)

function animateCSS(node, animationName, callback) {
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}