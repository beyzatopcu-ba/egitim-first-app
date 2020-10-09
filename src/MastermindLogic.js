let goalStones = [];
let guesses = [];

export const getGoalStones = () => goalStones;
export const getGuesses = () => guesses;

export const stones = [
    {
        id: 1,
        color: "#FF7860"
    },
    {
        id: 2,
        color: "#9D80FD"
    },
    {
        id: 3,
        color: "#97E241"
    },
    {
        id: 4,
        color: "#2AE2EA"
    },
    {
        id: 5,
        color: "#ED7EE4"
    },
    {
        id: 6,
        color: "#FFE622"
    },
]

export const startNewGame = () => {
    goalStones = generateRandomStoneCombination();
    guesses = [];

    return goalStones
}

const generateRandomStoneCombination = () => {
    let indices = [0,1,2,3,4,5]
    let randomStones = []

    let randomIndex;
    let stoneIndex;
    for (let i=0; i<4; i++) {
        randomIndex = Math.floor(Math.random() * indices.length);
        stoneIndex = indices[randomIndex];
        randomStones.push(stones[stoneIndex]);
        indices.splice(randomIndex, 1);
    }

    goalStones = randomStones;
    return randomStones;
}

export const compareGuessToGoal = (guessedStones, goalStones) => {
    let rightStoneRightPlace = 0;
    let rightStoneWrongPlace = 0;
    goalStones.map((goalStone, index) => {
        if (guessedStones[index].id == goalStone.id) {
            rightStoneRightPlace++;
        }
        else {
            guessedStones.map((guessedStone) => {
                if (goalStone.id == guessedStone.id) {
                    rightStoneWrongPlace++;
                }
            })
        }
    })

    let guess = {
        guessedStones,
        clues: {
            rightStoneRightPlace, 
            rightStoneWrongPlace
        }
    }

    guesses.push(guess);

    return guess.clues;
}

export const getFirstEmptyStonePit = (stonePits) => {
    for (let i=0; i<stonePits.length; i++) {
        if (stonePits[i] == null) {
            return i;
        }
    }

    return null;
}

export const hasNullStonePit = (stonePits) => {
    for (let i=0; i<stonePits.length; i++) {
        if (stonePits[i] == null) {
            return true;
        }
    }

    return false;
}