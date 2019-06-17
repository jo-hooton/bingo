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
            "1": "Eye",
            "2": "Duck",
            "3": "Cup of tea",
            "4": "Knock at the door",
            "5": "Man alive",
            "6": "cat",
            "7": "Lucky",
            "8": "Garden",
            "9": "Doctors Orders",
            "10": "Theresa May",
            "11": "Legs eleven",
            "12": "One dozen",
            "13": "Unlucky",
            "14": "Lawnmower",
            "15": "Keen",
            "16": "Never been kissed",
            "17": "abba dancing queen",
            "18": "Beer",
            "19": "Teen",
            "20": "One Score",
            "21": "Door Key",
            "22": "Ducks",
            "23": "I can has",
            "24": "24 cat",
            "25": "Duck and dive",
            "26": "crown",
            "27": "crutch",
            "28": "Mess",
            "29": "Rise and Shine",
            "30": "Dirty",
            "31": "Run",
            "32": "Buckle My Shoe",
            "33": "three",
            "34": "More",
            "35": "Jump",
            "36": "llama",
            "37": "Cat",
            "38": "cake",
            "39": "walk",
            "40": "Life Begins",
            "41": "wedding",
            "42": "Dont Panic",
            "43": "on your knees",
            "44": "panties",
            "45": "Halfway there",
            "46": "up to tricks",
            "47": "Heaven",
            "48": "Dog",
            "49": "Mine",
            "50": "target",
            "51": "Butt",
            "52": "cat toilet",
            "53": "Herbie",
            "54": "Man at the door",
            "55": "All the fives",
            "56": "Shotts Bus",
            "57": "Heinz Varieties",
            "58": "Date",
            "59": "Brighton",
            "60": "Grandma",
            "61": "mommy",
            "62": "Tickety boo",
            "63": "Bunny",
            "64": "Almost retired",
            "65": "Retirement age",
            "66": "Clickety click",
            "67": "Stairway to Heaven",
            "68": "Pick a Mate",
            "69": "69",
            "70": "Climb a tree",
            "71": "Drums",
            "72": "poo",
            "73": "Queen Bee",
            "74": "Hit the Floor",
            "75": "High five"
          }
        const phrase = Object.values(phrases)[key - 1].split(" ").join("+")
        return phrase
    }


}