import React from 'react';
import { ScrollView, Dimensions, StyleSheet, Text } from 'react-native';
//ICI UN COMPOSANT QUI SERVIRA DE TEMPLATE A CHAQUE FOIS ON VA CREER DES INPUTS
var { width } = Dimensions.get('window'); //ICI ON RECUPERE LES DIMENSIONS DE L'ECRAN SELON LE TYPE DE DEVICES

const FormContainer = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,

        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
    }
})

export default FormContainer;