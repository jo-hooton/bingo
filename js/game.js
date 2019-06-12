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

    getPhrase = number => {
        const key = String(number)
        const phrases = {
            "1": "Kellys Eye",
            "2": "One little duck",
            "3": "Cup of tea",
            "4": "Knock at the door",
            "5": "Man alive",
            "6": "Half a dozen",
            "7": "Lucky 7",
            "8": "Garden gate",
            "9": "Doctors Orders",
            "10": "Theresa May",
            "11": "Legs eleven",
            "12": "One dozen",
            "13": "Unlucky",
            "14": "The Lawnmower",
            "15": "Young and Keen",
            "16": "Never been kissed",
            "17": "Dancing Queen",
            "18": "Coming of Age",
            "19": "Goodbye Teens",
            "20": "One Score",
            "21": "Key of the Door",
            "22": "Ducks",
            "23": "The Lord is My Shepherd",
            "24": "Double dozen",
            "25": "Duck and dive",
            "26": "Two and six half a crown",
            "27": "Duck and a crutch",
            "28": "In a state",
            "29": "Rise and Shine",
            "30": "Dirty Gertie",
            "31": "Get Up and Run",
            "32": "Buckle My Shoe",
            "33": "All the threes",
            "34": "More",
            "35": "Jump and Jive",
            "36": "Triple dozen",
            "37": "Cat",
            "38": "Christmas cake",
            "39": "Steps",
            "40": "Life Begins",
            "41": "The one",
            "42": "Dont Panic",
            "43": "down on your knees",
            "44": "Droopy drawers",
            "45": "Halfway there",
            "46": "up to tricks",
            "47": "7 minutes in Heaven",
            "48": "Four Dozen",
            "49": "Mine",
            "50": "bullseye",
            "51": "Bum",
            "52": "Danny La Rue",
            "53": "Herbie",
            "54": "Man at the door",
            "55": "All the fives",
            "56": "Shotts Bus",
            "57": "Heinz Varieties",
            "58": "Date",
            "59": "The Brighton Line",
            "60": "Grandmas getting frisky",
            "61": "Your mum",
            "62": "Tickety boo",
            "63": "Rooby",
            "64": "Almost retired",
            "65": "Retirement age",
            "66": "Clickety click",
            "67": "Stairway to Heaven",
            "68": "Pick a Mate",
            "69": "69",
            "70": "Climb a tree",
            "71": "Bang on the Drum",
            "72": "Danny La Rue",
            "73": "Queen Bee",
            "74": "Hit the Floor",
            "75": "High five"
          }
        const phrase = Object.values(phrases)[key - 1].split(" ").join("+")
        return phrase
    }


}