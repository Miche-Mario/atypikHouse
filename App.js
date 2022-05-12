import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View } from "react-native"
import Toast from 'react-native-toast-message' //UTILISE POUR EFFECTUER NOS POPUP
// Context API
import Auth from "./Context/Store/Auth" //ON CHARGE EGALEMENT NOS DONNEES UTILISATEURS
// Navigators
import Main from "./Navigation/Main"
import Header from './Shared/Header'
export default function App() {
  return (

    //INDEX DE NOTRE APP--- ICI ON CHARGE LE STACK NAVIGATOR ET LE BOTTOMTAB QUI COMPRENNENT NOS DIFFERENTES PAGES
    <Auth>
            <NavigationContainer>
                  <View style={{flex:1}}>
                    <Header/>
                    <Main/>
                    <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
            </NavigationContainer>
    </Auth>
   

  );
}

