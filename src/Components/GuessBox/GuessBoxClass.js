import React from "react"

import {
    View
} from "react-native"

import StonePit from "../StonePit"
import ClueCircle from "../ClueCircle"
import styles from "./style"

// right stone right place : orange
// right stone wrong place : white

class GuessBox extends React.Component {


    constructor(props) {
        super(props);

        console.log(">>> GuessBox constructor with props: ", props)

        this.state = {}
    }

    componentDidMount() {
        console.log(">>> GuessBox componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(">>> GUESSBOX - SHOULD COMPONENT UPDATE")
        console.log("nextProps", nextProps)
        console.log("nextState", nextState)
        console.log("current props", this.props)
        console.log("current state", this.state)

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(">>> GUESSBOX - GET SNAPSHOT BEFORE UPDATE")
        console.log("prevProps", prevProps)
        console.log("prevState", prevState)
        console.log("current props", this.props)
        console.log("current state", this.state)

        return {
            dummy: "value"
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        console.log(">>> GUESSBOX - COMPONENT DID UPDATE")
        console.log("prevProps", prevProps)
        console.log("prevState", prevState)
        console.log("snapshot", snapshot)
        console.log("current props", this.props)
        console.log("current state", this.state)
    }

    componentWillUnmount() {
        console.log(">>> GuessBox componentWillUnmount")
    }

    renderStones = () => {

        let guessedStones = this.props.guessedStones;

        let guessedStoneComponents = guessedStones.map((guessedStone, index) => {
            return (
                <StonePit key={index} stone={guessedStone} onPress={() => this.props.onPress_GuessedStonePit(guessedStone, index)} />
            )
        })

        return guessedStoneComponents;
    }

    renderClues = () => {

        let clues = this.props.clues;

        let rightStoneRightPlace = 0;
        let rightStoneWrongPlace = 0;

        if (clues) {
            rightStoneRightPlace = clues.rightStoneRightPlace;
            rightStoneWrongPlace = clues.rightStoneWrongPlace
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

    render() {

        console.log(">>> GuessBox render with state", this.state);

        return (
            <View style={styles.container}>
                <View style={styles.stonesContainer}>
                    {this.renderStones()}
                </View>
                <View style={styles.guessResultsContainer}>
                    <View style={styles.guessCirclesContainer}>
                        {this.renderClues()}
                    </View>
                </View>
            </View>
        )
    }
}

export default GuessBox;