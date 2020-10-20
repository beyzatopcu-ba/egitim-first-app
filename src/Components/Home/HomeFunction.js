import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import StonePit from "../StonePit"
import GuessBox from "../GuessBox"
import OkayButton from "./HomeComponents/OkayButton"
import StonePits from "./HomeComponents/StonePits"
import TopGuessBox from './HomeComponents/TopGuessBox';
import GuessesScroll from "./HomeComponents/GuessesScroll"

import styles from "./style"
import {
    availableStones,
    getFirstEmptyStonePit,
    hasNullStonePit,
    startNewGame,
    compareGuessToGoal
} from "../../MastermindLogic"

const Home = () => {

    const goalStones = useRef()
    const scroll = useRef()

    // Generating a new game every time isNewGame is true
    const [isNewGame, setIsNewGame] = useState(true);
    useEffect(() => {
        if (isNewGame) {
            goalStones.current = startNewGame();
            setIsNewGame(false);
        }
    }, [isNewGame])

    // Initializing available stones & guessed stones
    const [stones, setStones] = useState([...availableStones]);
    const [guessedStones, setGuessedStones] = useState([null, null, null, null]);

    // When a stone pit in stones area is pressed
    const onPress_StonePit = (stone) => {
        // Copy the guessed stones in state
        let currentGuessedStones = [...guessedStones]
        // Find the first empty pit in guessed stones area
        let firstEmptyPit = getFirstEmptyStonePit(currentGuessedStones);
        // If there is no empty pit, do nothing
        if (firstEmptyPit == null) { return; }

        // Set the first empty pit's stone in guessed stones area to 'stone'
        currentGuessedStones[firstEmptyPit] = stone;
        setGuessedStones(currentGuessedStones)

        // Copy the stones in state
        let currentStones = [...stones]
        // Set the corresponding pit in stones area to null
        currentStones[stone.id - 1] = null;
        setStones(currentStones)
    }

    // Initializing the past guesses list
    const [guesses, setGuesses] = useState([]);

    // When a stone pit in guessed stones area is pressed
    const onPress_GuessedStonePit = (stone, index) => {
        // Copy the stones in state
        let currentStones = [...stones]
        // Set the stone pit's stone is stones area to 'stone'
        currentStones[stone.id - 1] = stone;
        setStones(currentStones)

        // Copy the guessed stones in state
        let currentGuessedStones = [...guessedStones]
        // Set the stone pit's stone in guessed stones area to null
        currentGuessedStones[index] = null;
        setGuessedStones(currentGuessedStones)
    }

    const onPress_OkayButton = () => {
        // Get clues for the guessed stones compared to goal stones
        let clues = compareGuessToGoal(guessedStones, goalStones.current);

        // Copy the past guesses in state
        let currentGuesses = [...guesses];

        // Create and add the current guess and its clues to the past guesses list
        let guess = {
            guessedStones: guessedStones,
            clues
        }
        currentGuesses.push(guess);
        setGuesses(currentGuesses);

        // Reset guessed stones
        setGuessedStones([null, null, null, null]);

        // Reset stones
        setStones([...availableStones]);

    }

    useEffect(() => {
        setTimeout(() => {
            scroll.current.scrollToEnd({ animated: true })
        }, 100);

        console.log("last item", guesses[guesses.length - 1])
        if (guesses.length > 0 && guesses[guesses.length - 1].clues.rightStoneRightPlace == 4) {
            Alert.alert(
                "Bravo!",
                "Kazandın! Tekrar oynamak ister misin?",
                [
                    {
                        title: "Tamam",
                        onPress: onPress_PlayAgain
                    }
                ])
        }
    }, [guesses])

    const onPress_PlayAgain = () => {
        // Reset game
        setStones([...availableStones])
        setGuessedStones([null, null, null, null])
        setGuesses([])
        setIsNewGame(true);
    }

    let okayButtonDisabled = hasNullStonePit(guessedStones)
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Text style={styles.headerText}>MASTERMIND</Text>
            </SafeAreaView>
            <TopGuessBox guessedStones={guessedStones} onPress_GuessedStonePit={onPress_GuessedStonePit} />
            <GuessesScroll guesses={guesses} setScrollRef={ref => scroll.current = ref} />
            <StonePits stones={stones} onPress_StonePit={onPress_StonePit} />
            <OkayButton okayButtonDisabled={okayButtonDisabled} onPress_OkayButton={onPress_OkayButton} />
        </View>
    );

}

export default Home;