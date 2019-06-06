class Game {
    
    constructor() {
        this.numbers = Array.from(Array(75).keys(), i => i + 1).sort(function() {
            return .5 - Math.random()
          });
        this.ballNumber = 0
        this.usedNumbers = []
    }

    pickNumber = () => {
        const pickedNumber = this.numbers[this.ballNumber]
        this.usedNumbers.push(pickedNumber)
        this.ballNumber++
        return pickedNumber
    }


}