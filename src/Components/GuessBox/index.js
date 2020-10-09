import React from "react"

import {
    View
} from "react-native"

import StonePit from "../StonePit"
import ClueCircle from "../ClueCircle"
import styles from "./style"

// right stone right place : orange
// right stone wrong place : white

const GuessBox = (props) => {

    let { guessedStones, clues } = props

    const renderStones = () => {

        let guessedStoneComponents = guessedStones.map((guessedStone, index) => {
            return (
                <StonePit key={index} stone={guessedStone} onPress={() => props.onPress_GuessedStonePit(guessedStone, index)} />
            )
        })

        return guessedStoneComponents;
    }

    const renderClues = () => {

        let rightStoneRightPlace = 0;
        let rightStoneWrongPlace = 0;

        if (props.clues) {
            rightStoneRightPlace = props.clues.rightStoneRightPlace;
            rightStoneWrongPlace = props.clues.rightStoneWrongPlace
        }

        let clueCircleComponents = [];

        let clueCircle;
        let clueIndex = 0;
        for (let i = 0; i < rightStoneRightPlace; i++) {
            clueCircle = (<ClueCircle key={clueIndex} color={"#FFB53C"} />)
            clueCircleComponents.push(clueCircle);
            clueIndex++
        }

        for (let j = 0; j < rightStoneWrongPlace; j++) {
            clueCircle = (<ClueCircle key={clueIndex} color={"white"} />)
            clueCircleComponents.push(clueCircle);
            clueIndex++
        }

        for (; clueIndex < 4; clueIndex++) {
            clueCircle = (<ClueCircle key={clueIndex} color={""} />)
            clueCircleComponents.push(clueCircle);
        }

        return clueCircleComponents;
    }

    return (
        <View style={styles.container}>
            <View style={styles.stonesContainer}>
                {renderStones()}
            </View>
            <View style={styles.guessResultsContainer}>
                <View style={styles.guessCirclesContainer}>
                    {renderClues()}
                </View>
            </View>
        </View>
    )
}

export default GuessBox;