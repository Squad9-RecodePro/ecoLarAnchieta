import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import logo from '../../../assets/comuni/logo.png'
import styles from './styles';

function Register({ navigation }) {

    const login = () => {
        navigation.navigate('Login');
    }

    const initialPage = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.caixa}>

            <TouchableOpacity
                onPress={initialPage}
                style={styles.imgLogo}>
                <Image source={logo} />
            </TouchableOpacity>

            <View style={styles.fundo}>
                <View style={styles.container}>

                    <View>
                        <Text style={styles.titulo}>Cadastre-se</Text>
                    </View>

                    <View style={styles.inputs}>

                        <TextInput placeholder="Nome" style={styles.input} />
                        <TextInput placeholder="Email" style={styles.input} />
                        <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />
                        <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry={true} />

                        <TouchableOpacity style={styles.btn} onPress={login}>
                            <Text style={styles.texto}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.link}
                            onPress={login}>
                            Já possui uma conta? Clique aqui</Text>

                    </View>
                </View>
            </View>

        </View>
    )
}


export default Register;