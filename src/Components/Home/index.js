import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import Stone from "../Stone"

import styles from "./style"

class Home extends React.Component {



    renderStones = () => {
        let colors = [
            "#FF7860", "#9D80FD", "#97E241",
            "#2AE2EA", "#ED7EE4", "#FFE622"
        ]

        let stones = colors.map((color, index) => {
            return (<Stone key={index} color={color} />);
        })
        
        return stones;
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.headerContainer}>
                    <Text style={styles.headerText}>MASTERMIND</Text>
                </SafeAreaView>
                <View style={styles.midArea}></View>
                <View style={styles.stoneBoxContainer}>
                    {this.renderStones()}
                </View>
                <SafeAreaView style={styles.okayButtonContainer}>
                    <TouchableOpacity style={styles.okayButton}>
                        <Text style={styles.okayButtonText}>TAMAM</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        );
    }

}

export default Home;
