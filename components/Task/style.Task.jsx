import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    task: {
        flexDirection: "row",
        borderRadius: 10,
        height: 70,
        width: "100%",
        backgroundColor: "#d3d3d3",
        marginBottom: 12
    },

    tickBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8
    },

    contentContainer: {
        flex: 8,
        marginHorizontal: 10,
        justifyContent: "center",
    }
})

export default styles;