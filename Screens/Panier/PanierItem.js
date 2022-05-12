import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import CustomButton from '../../Shared/StyledComponents/CustomButton'
import moment from "moment";
import axios from "axios"
import baseURL from '../../assets/data/common/baseURL';
const PanierItem = (props) => {
    
    const { item } = props
    
    return (
        <TouchableOpacity
            style={styles.item}
        >

            <Image
                resizeMethod="resize"
                resizeMode='stretch'
                style={styles.image}
                source={{ uri: props.item.photos[0] ? props.item.photos[0] : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png' }}
            />
            <View style={{ marginLeft: 60 }}>
                <View style={{ marginLeft: 70}}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>{props.item.title}</Text>
                </View>
               
                <View style={{ flexDirection: "row", marginLeft: 70, justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 14 }}>Réservé du</Text>
                        <Text style={{ fontSize: 14 }}>Au </Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{moment(props.item.start_date).format(" D MMMM YYYY")}</Text>

                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{moment(props.item.end_date).format(" D MMMM YYYY")}</Text>
                    </View>


                </View>
                <View style={{justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <CustomButton primary medium              onPress={() => props.navigation.navigate("Commentaire", {item: item.house})}
>
                        <Text style={{ color: "white" }}>commenter</Text>
                    </CustomButton>

                </View>





            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    conatiner: {
        marginTop: '10%'
    },
    item: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 1,
      padding: 5,
      margin: 5,
      backgroundColor: "white",
      flex: 1,
      borderRadius: 5
  },
  image: {
    width: 125,
    height: 118,
    backgroundColor: 'transparent',
    position: 'absolute',
    borderRadius: 10,
    marginTop: 5
  
},
})

export default PanierItem