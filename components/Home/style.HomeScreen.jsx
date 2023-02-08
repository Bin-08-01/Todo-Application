import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: "space-between"
    },

    topContainer: {
        flex: 1,
        marginHorizontal: 16,
    },

    botContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        bottom: 30,
        right: 30
    },

    title: {
        color: "royalblue",
        fontSize: 20,
        fontWeight: "bold"
    },

    taskContainer: {
        flex: 1,
        marginTop: 20,
    },

    buttonAdd: {
        fontSize: 28,
        textAlign: "center",
        color: "#fff"
    }
})

export default styles;