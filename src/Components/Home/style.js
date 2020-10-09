import { StyleSheet } from "react-native"
import { Platform } from "react-native"

import { height, width } from "../../Constants/Metrics"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#45433F"
    },
    headerContainer: {
        backgroundColor: "#22211F",
        justifyContent: "center",
        alignItems: "center",
    },
    midArea: {
        flexGrow: 1
    },
    stoneBoxContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: width * 0.03,
        borderTopWidth: 1,
        borderTopColor: "#8B8985"
    },
    headerText: {
        fontSize: width * 0.08,
        fontWeight: Platform.OS == "ios" ? "900" : "bold",
        color: "#FFB53C",
        marginVertical: width * 0.025,
        fontFamily: "Marker Felt",
        fontWeight: "normal"
    },
    okayButtonContainer: {
    },
    okayButton: {
        backgroundColor: "#FFB53C",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: width * 0.02
    },
    okayButtonText: {
        fontSize: width * 0.085,
        fontWeight: Platform.OS == "ios" ? "900" : "bold",
        fontFamily: "Marker Felt",
        fontWeight: "normal"
    },
    scroll: {
        flex:1,
    },
    scrollContentContainer: {
    },
    topGuessBoxContainer: {
        backgroundColor: "#33312E"
    }
})

export default styles;