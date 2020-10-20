import React from "react"

import {
    View,
    ScrollView
} from "react-native"

import GuessBox from "../../GuessBox"

import styles from "../style"

const GuessesScroll = (props) => {

    const renderGuesses = () => {
        let guessComponents = props.guesses.map((guess, index) => {
            return (
                <GuessBox
                    key={index + 1}
                    guessedStones={guess.guessedStones}
                    clues={guess.clues} />
            )
        })

        return guessComponents;
    }
    
    return (
        <View style={styles.midArea}>
            <ScrollView style={styles.scroll} ref={props.setScrollRef}>
                {renderGuesses()}
            </ScrollView>
        </View>
    )
}

export default GuessesScroll