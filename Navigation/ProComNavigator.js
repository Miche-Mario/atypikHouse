import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
//ICI ON CREE LE BLOC DE NAVIGATION QUI COMPREND LES PAGES CONCERNANT LES PROPRIETAIRES

import Commande from '../Screens/Commandes/Commande'
import CommandesDetails from '../Screens/Commandes/CommandesDetails'
import CommandeItem from '../Screens/Commandes/CommandeItem'
const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator

        >
            <Stack.Screen
                name="Commande"
                component={Commande}
                options={{
                    headerShown: false
                }}
            />
              <Stack.Screen
                name="CommandeItem"
                component={CommandeItem}
                options={{
                    headerShown: true
                }}
            />
            <Stack.Screen
                name="Réservé"
                component={CommandesDetails}
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