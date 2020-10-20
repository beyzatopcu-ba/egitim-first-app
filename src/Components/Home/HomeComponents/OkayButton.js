import React from "react"

import {
    SafeAreaView,
    TouchableOpacity,
    Text
} from "react-native"

import styles from "../style"

const OkayButton = (props) => {
    return (
        <SafeAreaView style={styles.okayButtonContainer}>
            <TouchableOpacity
                style={[styles.okayButton, { opacity: props.okayButtonDisabled ? 0.5 : 1 }]}
                onPress={props.onPress_OkayButton}
                disabled={props.okayButtonDisabled}>
                <Text style={styles.okayButtonText}>TAMAM</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
} 

export default OkayButton