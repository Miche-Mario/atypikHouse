import React, {useContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProComNavigator from './ProComNavigator'
import LocPanNavigator from'./LocPanNavigator'

import UtilNavigator from './UtilNavigator'
import AuthGlobal from '../Context/Store/AuthGlobal'
const Tab = createBottomTabNavigator()

//ICI ON CREE LA BARRE EN BAS QUI COMPREND TOUS NOS STACKS
const Main = () => {
    const context = useContext(AuthGlobal)
    return (
        <Tab.Navigator
        initialRouteName="CommandeLoc"
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#e91e63"
        }}
        >
      {context.stateUser.user[1] == "owner" || context.stateUser.user[1]=="administrator" ? ( //AFICHER UNIQUEMENT AU OWNER ET ADMINISTRATEUR
            <Tab.Screen 
                name="CommandeLoc"
                component={ProComNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name='cog'
                            style={{ position: 'relative'}}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />): null

        }

{context.stateUser.user[1] == "owner" || context.stateUser.user[1] == "customer" ? ( //AFFICHER UNIQUEMENT AU CUSTOMER
            <Tab.Screen
                name="Panier"
                component={LocPanNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name='shopping-cart'
                            style={{ position: 'relative'}}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />): null

        }
            <Tab.Screen
                name="Profile"
                component={UtilNavigator}
                options={{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name='user'
                            style={{ position: 'relative'}}
                            color={color}
                            size={30}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default Main