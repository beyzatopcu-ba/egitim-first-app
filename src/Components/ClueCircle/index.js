import React from "react"
import {
    View
} from "react-native"

import styles from "./style"

const ClueCircle = (props) => {
    let circleStyle = [
        styles.circle,
        {
            backgroundColor: props.color
        }
    ]
    return (
        <View style={circleStyle}/>
    )
}

export default ClueCircle;