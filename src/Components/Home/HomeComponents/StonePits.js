import React from "react"

import { View } from "react-native"

import StonePit from "../../StonePit"

import styles from "../style"

const StonePits = (props) => {

    const renderStonePits = () => {
        let stonePitComponents = props.stones.map((stone, index) => {
            return (
                <StonePit
                    key={index}
                    stone={stone}
                    onPress={() => props.onPress_StonePit(stone)} />
            );
        })

        return stonePitComponents;
    }


    return (
        <View style={styles.stoneBoxContainer}>
            {renderStonePits()}
        </View>
    )
}

export default StonePits