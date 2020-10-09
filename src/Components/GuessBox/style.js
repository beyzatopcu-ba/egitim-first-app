import { StyleSheet } from "react-native"

import { width, height } from "../../Constants/Metrics"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "#8B8985",
        borderBottomWidth: 1
    },
    stonesContainer: {
        flex: 0.65,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: width * 0.03,
    },
    guessResultsContainer: {
        flex: 0.35,
        paddingHorizontal: width * 0.025
    },
    guessCirclesContainer: {
        borderRadius: width * 0.02,
        borderWidth: 1,
        borderColor: "#B1ADA5",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: width * 0.02
    }
})

export default styles;