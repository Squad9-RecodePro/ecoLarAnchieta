import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Login() {
    return (
        <View style={styles.caixa}>
            <View style={styles.fundo}>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Bem Vindo(a) ao Eco Lar Anchieta</Text>
                    <View>
                        <Text style={styles.subtitulo}>Login</Text>
                    </View>

                    <View style={styles.inputs}>

                        <TextInput placeholder="Email" style={styles.input} />
                        <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} />

                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.texto}>Entrar</Text>
                        </TouchableOpacity>
                        <Text style={styles.link}
                            onPress={() => Linking.openURL('http://google.com')}>
                            Esqueceu a senha ? Clique aqui</Text>
                        <Text style={styles.link}
                            onPress={() => Linking.openURL('http://google.com')}>
                            Ainda não tem uma conta?</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}


export default Login;