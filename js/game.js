class Game {
    
    constructor() {
        this.numbers = Array.from(Array(75).keys(), i => i + 1).sort(function() {
            return .5 - Math.random();
          });
        this.ballNumber = 0
        this.usedNumbers = []
    }

    pickNumber = () => {
        this.usedNumbers.push(this.numbers[this.ballNumber])
        this.ballNumber++
    }


}