import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import { Card } from 'react-native-elements';


import styles from './styles';
import vagas from './vagas';
import logo from '../../../assets/comuni/logo.png'

function PainelUser({ navigation }) {

    const initialPage = () => {
        navigation.navigate('PainelUser');
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={initialPage}
                style={styles.imgLogo}>
                <Image source={logo} />
            </TouchableOpacity>
            <ScrollView>

                <View style={styles.blocoVolun}>
                    <Text style={styles.tituloVolun}>Seja bem-vindo, deseja ser um voluntário?</Text>
                    <Text style={styles.textVolun}>Veja algumas vagas, para que possa colaborar com a sua comunidade:</Text>
                </View>

                <View>
                    {vagas.map((vaga, id) => {
                        return (
                            <Card key={id}>

                                <Card.Title style={styles.cardTitle}>{vaga.titulo}</Card.Title>
                                <Card.Divider />

                                <Text style={styles.cardVaga}>Titulo: {vaga.titulo}</Text>
                                <Text style={styles.cardDescricao}>Descrição: {vaga.descricao}</Text>
                                <Text style={styles.cardNvagas}>Numero de Vagas: {vaga.nvagas}</Text>

                            </Card>
                        );
                    })}
                </View>
            </ScrollView>

        </View>
    );
}


export default PainelUser;
