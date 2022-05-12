import React, {useContext, useState, useCallback, useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet, Button} from 'react-native'
//import { Container } from "native-base"
import { useFocusEffect } from "@react-navigation/native"
import {AsyncStorage} from 'react-native';
import CustomButton from "../../Shared/StyledComponents/CustomButton"

import axios from 'axios'
import baseURL from '../../assets/data/common/baseURL'
import AuthGlobal from '../../Context/Store/AuthGlobal'
import { logOutUser } from '../../Context/Actions/Auth.actions'
//import OrderCard from '../../Shared/OrderCard';



const Profile = (props) => {
  const context = useContext(AuthGlobal)
  const [userProfile, setUserProfile] = useState()
  //const [orders, setOrders ] = useState()

  useFocusEffect(
    useCallback(() => {
    if (
        context.stateUser.isAuthenticated === false || 
        context.stateUser.isAuthenticated === null
    ) {
        props.navigation.navigate("Login")
    }

    AsyncStorage.getItem("jwt")
        .then((res) => {
            axios
                .get(`${baseURL}users/${context.stateUser.user[0]}`)
                .then((user) => setUserProfile(user.data.data))
        })
        .catch((error) => alert ("Vérifier vos Identifiants"))




    return () => {
        setUserProfile();
  
    }

}, [context.stateUser.isAuthenticated]))




  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <Text style={{fontSize: 30}}>
          {userProfile ? userProfile.name: ""}
        </Text>
        <View style={{marginTop: 20}}>
          <Text style={{margin: 10}}>
            Email: {userProfile ? userProfile.email : ""}
          </Text>
          <Text style={{margin: 10}}>
            Phone: {userProfile ? userProfile.phone : ""}
          </Text>
        </View>
        <View>
        <CustomButton 
            danger
            large
            title={"Sign Out"} onPress={() => [
            AsyncStorage.removeItem("jwt"),
            logOutUser(context.dispatch)
        ]}
        >
          <Text style={{color: "white"}}>Sign Out</Text>
        </CustomButton>
        </View>
   {/*      <View style={styles.order}>
          <Text style={{ fontSize: 20}}> My Orders</Text>
          <View>
            {orders ? (
              orders.map((x) => {
                  return <OrderCard key={x.id} {...x} />
              })
            ): (
              <View>
                <Text>You have no orders</Text>
              </View>
            )}
          </View>
        </View> */}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center"
  },
  subContainer: {
    alignItems: "center",
    marginTop: 60
  },
  order: {
    marginTop: 20,
    alignItems: "center",
    marginBottom: 60
  }
})
export default Profile