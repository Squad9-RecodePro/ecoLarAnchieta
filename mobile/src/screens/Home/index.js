import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    Image,
    ScrollView,
} from 'react-native';


import styles from './styles';
import imgComunidade from '../../../assets/comuni/anchieta4.jpeg'
import logo from '../../../assets/comuni/logo.png'
import quemSomos from '../../../assets/comuni/quemSomos.jpg'
import oProjeto from '../../../assets/comuni/projeto.jpg'

function Home({ navigation }) {

    const login = () => {
        navigation.navigate('Login');
    }

    const register = () => {
        navigation.navigate('Register');
    }

    const initialPage = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.caixa}>

                <StatusBar style='auto' />

                <TouchableOpacity
                    onPress={initialPage}
                    style={styles.imgLogo}>
                    <Image source={logo} />
                </TouchableOpacity>


                <View style={styles.viewContainer}>
                    <ImageBackground source={imgComunidade} style={styles.imgFundo} >
                        <Text style={styles.ecoText}> ECO LAR ANCHIETA </Text>

                        <Text style={styles.comuText}>
                            Projeto desenvolvido para os moradores da Ocupação Anchieta,
                            localizada no bairro do Grajaú São Paulo, ocupação que
                            já é resistência a sete anos.
                        </Text>

                        <View style={styles.flexBtn}>

                            <TouchableOpacity style={styles.btn} onPress={register}>
                                <Text style={styles.btnText}>
                                    Inscreva-se
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btn} onPress={login}>
                                <Text style={styles.btnText}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={styles.sobre}>
                        <Text style={styles.textSobre}>SOBRE A OCUPAÇÃO ANCHIETA</Text>
                        <Text style={styles.dadosSobre}>
                            A ocupação Anchieta, fica na região do Grajau, Zona Sul de São Paulo e abriga mais 1.100 famílias.
                            Os lotes ficam em um terreno particular e a negociação com o Instituto Anchieta do Grajaú, proprietário da área, incluem um projeto de urbanização. Uma nascente que fica na área já foi isolada, as ruas têm nome e a Sabesp e a Enel já iniciaram estudos para colocar redes de água, esgoto e energia elétrica.
                            A população já é assistida por escolas e postos de saúde do entorno.
                            “Somos um bairro”, diz moradora.
                    </Text>

                    </View>

                </View>

                {/* 
                <View style={styles.quemSomos}>

                    <Image style={styles.quemSomosImg} source={quemSomos} />
                    <Text style={styles.quemSomosText}>
                        Quem somos
                    </Text>
                    <Text style={styles.quemSomosGeral}>
                        O Eco Lar Anchieta, é um projeto social do curso Full Stack da ONG RECODE PRO.
                        Fundado em 2020 por jovens estudantes que moram em várias localidades de São Paulo
                        (Edson Oliveira, Elnatan Souza, Frederico Reid, Gustavo Cavalcante, Tainá Ferreira e Thamirez Bastos).
                    </Text>

                </View> */}

                {/* <View style={styles.oProjeto}>

                    <Image style={styles.oProjetoImg} source={oProjeto} />
                    <Text style={styles.oProjetoText}> O projeto</Text>
                    <Text style={styles.oProjetoGeral}>
                        Essa é uma plataforma para cadastrar os moradores, uma plataforma interna,
                        que seja possível emitir comunicados e possíveis mutirões para ajudar uns aos outros, promovendo ainda mais a união da comunidade, entre outras facilidades.
                    </Text>

                </View> */}

            </View>
        </ScrollView>
    );
}

export default Home;
