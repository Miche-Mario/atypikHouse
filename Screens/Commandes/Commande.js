import React, {useEffect, useState, useContext} from 'react'
import {Text, View, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity} from "react-native"
import baseURL from '../../assets/data/common/baseURL'
import axios from "axios"
import { AsyncStorage } from 'react-native'
import AuthGlobal from '../../Context/Store/AuthGlobal'
import CustomButton from '../../Shared/StyledComponents/CustomButton'
import CommandeItem from './CommandeItem'

const SCREEN_WIDTH = Dimensions.get('window').width


const Commande = (props) => {
    const context = useContext(AuthGlobal)
    const [commande, setCommande] = useState()


    const [token, setToken] = useState()



    useEffect(() => {
        AsyncStorage.getItem("jwt")
            .then((res) => {
              setToken(res);
 
            })
            .catch((error) => console.log(error))
           
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`                }
              };

        axios
            .get(`${baseURL}houses/booked/author/${context.stateUser.user[0]}`, config)
            .then((res) => setCommande(res.data.data))
            .catch((error) => console.log(error))

     

        return () => {
          setCommande()
          setToken()
  
        }
       
      }, [])
    

       
    
  return (
    <View style={{marginTop: 30}}>

<Text style={{marginBottom: 5, fontSize:25, backgroundColor: "gray", color: "white", padding: 5, fontWeight: "bold"}}>Mes Biens Réservés</Text>
        <FlatList
            data={commande}
            renderItem={({item, index}) => (
              <CommandeItem navigation={props.navigation} index={index} item={item}/> )}
            keyExtractor={(item, index) => Math.random()}
        />
      

    </View>
  )
}


export default Commande