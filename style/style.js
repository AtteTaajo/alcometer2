import { StyleSheet } from "react-native";

const darkstyle = StyleSheet.create({
    container: {
        backgroundColor: '#362c29',
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    alc: {
        color: "white",
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text:{
        color: "white",
        fontSize: 20,
        margin: 8,
        fontWeight: "bold",
    },
    num: {
        margin: 5,
    },
    rad: {
        color: "white",
    },
    resu: {
        alignItems: "center",
    },
    swi: {
        alignItems: "flex-start",
    },
    test: {
        borderColor: "white",
        borderWidth: 1,
        padding: 10,
        color: "white",
    }

});

const lightStyle = StyleSheet.create({
    container: {
        ...darkstyle.container,
        backgroundColor: '#856dad'
    },
    alc: {
       ...darkstyle.alc,
    },
    text:{
        ...darkstyle.text,
    },
    num: {
        ...darkstyle.num,
    },
    rad: {
        ...darkstyle.rad,
    },
    resu: {
        ...darkstyle.resu,
    },
    swi: {
        ...darkstyle.swi,
    },
    test: {
        ...darkstyle.test,
    }
})

export {darkstyle, lightStyle};