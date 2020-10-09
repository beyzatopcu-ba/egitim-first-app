import {StyleSheet} from "react-native"

import { width, height } from "../../Constants/Metrics"

const styles = StyleSheet.create({
    circle: {
        borderRadius: 100,
        width: width * 0.05,
        height: width * 0.05,
        borderColor: "#A8A5A0",
        borderWidth: 1
    }
})

export default styles;