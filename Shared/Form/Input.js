import React from 'react';
import { TextInput, StyleSheet } from 'react-native'
//ON DETRIMENT D'UTILISER LA METHODE INPUT PROPOSE PAR REACT NATIVE ON CUSTOMISE LE NOTRE POUR RECUPERER DE LA DATA
const Input = (props) => {
    return (
        <TextInput
        style={styles.input}
        placeholder={props.placeholder} //LE TEXT AFFICHER DANS L'INPUT AVANT DE TAPER AU CLAVIER
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText} //QUAND ON AJOUTE DE LA DONNEE
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry} //POUR CACHER LE MOT DE PASSE
        keyboardType={props.keyboardType}
        >
        </TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 45,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: 'orange'
    },
});

export default Input;