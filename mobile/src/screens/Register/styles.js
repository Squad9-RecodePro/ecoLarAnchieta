import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: "100%"
        //web 100vh
    },
    imgLogo: {
        width: '100%',
        height: '9%',
        marginBottom: 45
    },
    fundo: {
        width: "100%",
        height: "85%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0B305E"
    },
    container: {
        width: "90%",
        height: "65%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 4

    },
    titulo: {
        color: "#12B87C",
        fontSize: 32
    },
    inputs: {
        width: "100%",
        padding: 8
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 8,
        marginTop: 12,
        borderBottomWidth: 2,
        borderBottomColor: "#1c83f6",
        borderRadius: 4

    },
    btn: {
        backgroundColor: "#12B87C",
        marginTop: 12,
        padding: 8,
        borderRadius: 14
    },
    texto: {
        fontSize: 18,
        color: "white",
        textAlign: 'center'
    },
    link: {
        fontSize: 16,
        marginTop: 10,
        color: "#1c83f6",
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;