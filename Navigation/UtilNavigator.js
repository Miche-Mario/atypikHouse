import React from "react"

import  { createStackNavigator} from '@react-navigation/stack'
import Login from "../Screens/Utilisateur/Login"
import Profile from "../Screens/Utilisateur/Profile"

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            tabBarShowLabel: false,
          }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default function UserNavigator() {
    return <MyStack />
}