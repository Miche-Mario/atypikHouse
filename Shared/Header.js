import React from 'react'
import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
//ICI ON CRé ON COMPONENT QUI PORTERA LE LOGO ET SERA AFFICHER SUR TOUT NOS ECRAN
const Header = () => {
  return (
    <SafeAreaView>
        <View style={styles.header}>
            <Image
                source= {require('../assets/Logo.png')}
                resizeMode="contain"
                style={{height: 50}}
            />
        </View>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: 'center',
        padding: 10,
        marginTop:10
    }
})
export default Header