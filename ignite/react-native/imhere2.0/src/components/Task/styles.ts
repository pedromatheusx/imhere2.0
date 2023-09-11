import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    name: {
        flex: 1,
        fontSize: 20,
        color: "#FFF",
        padding: 10
    },
    nameLine: {
        flex: 1,
        fontSize: 20,
        color: "#FFF",
        padding: 10,
        textDecorationLine: 'line-through'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#262626",
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        margin: 5,
        borderRadius: 25,
        borderColor: "#4EA8DE"
    }
})