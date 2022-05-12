import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Panier from '../Screens/Panier/Panier'
import Commentaire from '../Screens/Panier/Commentaire'
const Stack = createStackNavigator()
//ICI ON CREE LE BLOC DE NAVIGATION QUI COMPREND LES PAGES CONCERNANT LES LOCATAIRES
function MyStack() {
    return (
        <Stack.Navigator

        >
            <Stack.Screen
                name="Panier"
                component={Panier}
                options={{
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="Commentaire"
                component={Commentaire}
                options={{
                    headerShown: true
                }}
            />
           
        </Stack.Navigator>
    )
}
export default function ProComNavigator() {
    return <MyStack/>
}