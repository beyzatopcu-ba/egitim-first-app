import React from "react";
import { TouchableOpacity } from "react-native"

import styles from "./style"

const StonePit = (props) => {
    
    let color = props.stone ? props.stone.color : "#86837E";
    let circleStyle = [
        styles.circle,
        {
            backgroundColor: color
        }
    ]

    return (
        <TouchableOpacity style={circleStyle} onPress={props.stone ? props.onPress : null} />
    )
}

export default StonePit;