import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imgFundo: {
        marginBottom: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    bloco: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 160,
        backgroundColor: 'rgba(11, 48, 94, 0.8)',
        
    },
    ecoText: {
        // marginLeft: 10,
        // marginTop: 30,
        marginVertical: 40,
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        shadowOpacity: 1

    },
    comuText: {
        marginLeft: 15,
        fontSize: 22,
        marginTop: 10,
        color: '#fff',

    },
    flexBtn: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    btn: {
        height: 50,
        width: '35%',
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#12B87C',
        shadowOpacity: 1
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    sobre: {
        backgroundColor: '#0B305E',

    },
    textSobre: {
        color: '#fff',
    },
})

export default styles;