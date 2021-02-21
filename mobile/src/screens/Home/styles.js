import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '110%',
    },
    caixa: {
        width: '100%',
        height: '100%',
    },
    imgLogo: {
        width: '100%',
        height: '10%',
        marginBottom: 45
    },
    imgFundo: {
        height: '100%',
    },
    viewContainer: {
        height: '40%'
    },
    ecoText: {
        marginVertical: 10,
        marginLeft: 7,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    comuText: {
        marginLeft: 25,
        fontSize: 20,
        color: '#fff',
        marginBottom: 18,
    },
    btn: {
        height: 50,
        width: '25%',
        margin: 5,
        alignItems: 'center',
        borderRadius: 7,
        justifyContent: 'center',
        backgroundColor: '#12B87C',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    flexBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    sobre: {
        backgroundColor: '#0B305E',
        height: '120%',
    },
    textSobre: {
        marginTop: 15,
        marginLeft: 10,
        fontWeight: '700',
        fontSize: 20,
        color: '#fff',
    },
    dadosSobre: {
        marginLeft: 12,
        color: '#fff',
        fontSize: 18,
    },
    // quemSomos: {
    //     height: '90%',
    // },
    // quemSomosImg: {
    //     marginTop: 20,
    //     height: '25%',
    //     width: '25%',
    //     marginBottom: 7,
    // },
    // quemSomosText: {
    //     marginLeft: 12,
    //     marginBottom: 7,
    //     color: '#1C1C1C',
    //     fontWeight: '700',
    // },
    // quemSomosGeral: {
    //     marginLeft: 12,
    //     color: 'black',
    //     marginBottom: 7,
    // },
})

export default styles;
