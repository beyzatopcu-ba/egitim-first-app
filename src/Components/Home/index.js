import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import Stone from "../Stone"

import styles from "./style"

class Container extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.headerContainer}>
                    <Text style={styles.headerText}>MASTERMIND</Text>
                </SafeAreaView>
                <View style={styles.midArea}></View>
                <View style={styles.stoneBoxContainer}>
                    <Stone />
                    <Stone />
                    <Stone />
                    <Stone />
                    <Stone />
                    <Stone />
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

export default Container;
