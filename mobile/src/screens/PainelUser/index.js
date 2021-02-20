import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


import styles from './styles';

function PainelUser() {
    return (
        <View style={styles.container}>
            <View style={styles.blocovolun}>
                <Text style={styles.titulovolun}>Seja bem-vindo, deseja ser um voluntário?</Text>
                <Text>Veja algumas vagas, para que possa colaborar com a sua comunidade:</Text>
            </View>
        </View>
    )
}


export default PainelUser;
