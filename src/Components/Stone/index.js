import React from "react";
import { View } from "react-native"

import styles from "./style"

const Stone = (props) => {
    
    let color = props.color;
    let circleStyle = [
        styles.circle,
        {
            backgroundColor: color
        }
    ]

    return (
        <View style={circleStyle}></View>
    )
}

export default Stone;