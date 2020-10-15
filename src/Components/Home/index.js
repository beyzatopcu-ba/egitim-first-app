import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import StonePit from "../StonePit"
import GuessBox from "../GuessBox/GuessBoxClass"

import styles from "./style"
import {
    stones,
    getFirstEmptyStonePit,
    hasNullStonePit,
    startNewGame,
    compareGuessToGoal
} from "../../MastermindLogic"


class Home extends React.Component {

    constructor(props) {
        super(props)

        console.log(">>> Home constructor with props: ", props)

        this.state = {
            stones: [...stones],
            guessedStones: [null, null, null, null],
            guesses: [],
            hideGuessBox: false
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(">>> HOME - SHOULD COMPONENT UPDATE")
        console.log("nextProps", nextProps)
        console.log("nextState", nextState)
        console.log("current props", this.props)
        console.log("current state", this.state)

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(">>> HOME - GET SNAPSHOT BEFORE UPDATE")
        console.log("prevProps", prevProps)
        console.log("prevState", prevState)
        console.log("current props", this.props)
        console.log("current state", this.state)

        return {
            dummy: "value"
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log(">>> HOME - COMPONENT DID UPDATE")
        console.log("prevProps", prevProps)
        console.log("prevState", prevState)
        console.log("snapshot", snapshot)
        console.log("current props", this.props)
        console.log("current state", this.state)
    }

    goalStones = []
    scroll = null

    componentDidMount() {
        console.log(">>> Home componentDidMount")
        this.goalStones = startNewGame();
    }

    onPress_StonePit = (stone) => {
        let stones = [...this.state.stones]
        let guessedStones = [...this.state.guessedStones]

        let firstEmptyPit = getFirstEmptyStonePit(guessedStones);
        if (firstEmptyPit == null) { return; }

        stones[stone.id - 1] = null;
        guessedStones[firstEmptyPit] = stone;
        this.setState({
            stones: stones,
            guessedStones: guessedStones,
        })
    }

    onPress_GuessedStonePit = (stone, index) => {
        let stones = [...this.state.stones]
        let guessedStones = [...this.state.guessedStones]

        stones[stone.id - 1] = stone;
        guessedStones[index] = null;

        this.setState({
            stones,
            guessedStones
        })
    }

    onPress_OkayButton = () => {
        let clues = compareGuessToGoal(this.state.guessedStones, this.goalStones);

        let guesses = [...this.state.guesses];
        let guess = {
            guessedStones: this.state.guessedStones,
            clues
        }
        guesses.push(guess);

        this.setState({
            guesses,
            guessedStones: [null, null, null, null],
            stones: [...stones],
            hideGuessBox: true
        }, () => {

            setTimeout(() => {
                this.scroll.scrollToEnd({ animated: true })
            }, 100);

            if (clues.rightStoneRightPlace == 4) {
                Alert.alert(
                    "Bravo!",
                    "Kazandın! Tekrar oynamak ister misin?",
                    [
                        {
                            title: "Tamam",
                            onPress: this.onPress_PlayAgain
                        }
                    ])
            }
        })
    }

    onPress_PlayAgain = () => {
        this.goalStones = startNewGame();
        this.setState({
            stones: [...stones],
            guessedStones: [null, null, null, null],
            guesses: []
        })
    }

    renderStonePits = () => {
        let stones = this.state.stones

        let stonePitComponents = stones.map((stone, index) => {
            return (
                <StonePit
                    key={index}
                    stone={stone}
                    onPress={() => this.onPress_StonePit(stone)} />
            );
        })

        return stonePitComponents;
    }

    renderGuesses = () => {
        let guesses = this.state.guesses

        let guessComponents = guesses.map((guess, index) => {
            return (
                <GuessBox
                    key={index + 1}
                    guessedStones={guess.guessedStones}
                    clues={guess.clues} />
            )
        })

        return guessComponents;
    }

    setScrollRef = (ref) => {
        this.scroll = ref;
    }

    render() {

        console.log(">>> Home render")

        let okayButtonDisabled = hasNullStonePit(this.state.guessedStones)
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.headerContainer}>
                    <Text style={styles.headerText}>MASTERMIND</Text>
                </SafeAreaView>
                <View style={styles.midArea}>
                    <View style={styles.topGuessBoxContainer}>
                        {
                            this.state.hideGuessBox ?
                                null
                                :
                                <GuessBox
                                    key={0}
                                    guessedStones={this.state.guessedStones}
                                    clues={null}
                                    onPress_GuessedStonePit={this.onPress_GuessedStonePit} />
                        }
                    </View>
                    <ScrollView style={styles.scroll} ref={this.setScrollRef}>
                        {this.renderGuesses()}
                    </ScrollView>
                </View>
                <View style={styles.stoneBoxContainer}>
                    {this.renderStonePits()}
                </View>
                <SafeAreaView style={styles.okayButtonContainer}>
                    <TouchableOpacity
                        style={[styles.okayButton, { opacity: okayButtonDisabled ? 0.5 : 1 }]}
                        onPress={this.onPress_OkayButton}
                        disabled={okayButtonDisabled}>
                        <Text style={styles.okayButtonText}>TAMAM</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        );
    }

}

export default Home;
