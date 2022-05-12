import React, {useEffect, useState, useContext} from 'react'
import {Text, View, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity} from "react-native"
import baseURL from '../../assets/data/common/baseURL'
import axios from "axios"
import { AsyncStorage } from 'react-native'
import AuthGlobal from '../../Context/Store/AuthGlobal'
import CustomButton from '../../Shared/StyledComponents/CustomButton'
//ICI IL SAGIT DU LAYOUT DE LA PAGE PANIER
import PanierItem from './PanierItem'

const SCREEN_WIDTH = Dimensions.get('window').width


const Panier = (props) => {
    const context = useContext(AuthGlobal)
    const [panier, setPanier] = useState()


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
            .get(`${baseURL}booking/author/${context.stateUser.user[0]}`, config)
            .then((res) => setPanier(res.data.data))
            .catch((error) => console.log(error))

     

        return () => {
          setPanier()
          setToken()
  
        }
       
      }, [])
    

   
    
  return (
    <View style={{marginTop: 30}}>

        <Text style={{marginBottom: 5, fontSize:25, backgroundColor: "gray", color: "white", padding: 5, fontWeight: "bold"}}>Mes Réservations</Text>
        <FlatList
            data={panier}
            renderItem={({item, index}) => (
              <PanierItem navigation={props.navigation} index={index} item={item}/> )}
            keyExtractor={(item, index) => Math.random()}
        />
      

    </View>
  )
}


export default Panier