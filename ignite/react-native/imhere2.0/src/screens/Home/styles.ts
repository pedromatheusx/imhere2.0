import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    icon: {
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
    },
    form: {
        marginTop: -40,
        flexDirection: 'row',
        padding: 10,
    },
    textInput: {
        flex: 1,
        height: 54,
        borderRadius: 5,
        backgroundColor: '#262626',
        marginRight: 5,
        fontSize: 16,
        color: '#FFF',
        padding: 10
    },
    button: {
        width: 54,
        height: 54,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 25,
    },
    count: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        paddingBottom: 20,
        color: '#FFF'
    },
    listEmpty: {
      
       alignItems: 'center',
       borderTopWidth: 1,
       borderColor: '#262626'
    },

    listEmptyText: {
      color: "#FFF"
     }
});
