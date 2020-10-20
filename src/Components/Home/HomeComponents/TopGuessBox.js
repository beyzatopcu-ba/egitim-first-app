import React from "react"

import { View } from "react-native"

import GuessBox from "../../GuessBox"

import styles from "../style"

const TopGuessBox = (props) => {
    return (
        <View style={styles.topGuessBoxContainer}>
            <GuessBox
                guessedStones={props.guessedStones}
                clues={null}
                onPress_GuessedStonePit={props.onPress_GuessedStonePit} />
        </View>
    )
}

export default TopGuessBox;