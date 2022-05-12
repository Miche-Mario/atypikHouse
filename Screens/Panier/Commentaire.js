import React, {useState, useEffect, useContext} from 'react'
import { View, Text, Dimensions,TextInput, StyleSheet, FlatList} from 'react-native'
var { width } = Dimensions.get('screen');
import AuthGlobal from '../../Context/Store/AuthGlobal';
import { AsyncStorage } from 'react-native'
import baseURL from '../../assets/data/common/baseURL';
import axios from "axios"
import moment from 'moment';

import CustomButton from '../../Shared/StyledComponents/CustomButton'

//ICI IL SAGIT DU LAYOUT DE LA PAGE COMMENTAIRE
const Item = (props) => {
  return (
    <View style={styles.item}>
      <View style={{flexDirection: "row", justifyContent: "space-between",}}>
        <Text style={{fontSize:20}}>"{props.item.content}</Text>
        <Text> {moment(props.item.created_date).format(" D MMMM YYYY")}</Text>
      </View>
      <View>
        <Text>Ajouter par: {props.item.first_name}</Text>
      </View>

      </View>

  )
}
const Commentaire = (props) => {
const context = useContext(AuthGlobal)
const [comment, setComment] = useState([])
const [commentContent, setCommentContent] = useState()
const [token, setToken] = useState()


const [item, setItem] = useState(props.route.params.item);

useEffect(() => { //ICI ON RECUPERERE LES DONNEES AUSSITOT LA PAGE SE CHARGE GRACE A USEEEFFECT
  AsyncStorage.getItem("jwt")
      .then((res) => {
        setToken(context.stateUser.user[2]); //ON CHARGE NOTRE LOGIN_SESSION_TOKEN
      })
      .catch((error) => console.log(error))

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      };

  axios
      .get(`${baseURL}comments`, config) //ON RECUPERE LES DONNEES
      .then((res) => setComment(res.data.data)) //ON CHARGE LA DONNEEE DANS NOTRE VARIABLE COMMENT
      .catch((error) => alert('Error to load commentaire'))

  return () => {
    setComment()
    setToken()
  }
}, [])



const addComent = () => {
  const comment = {
    name: commentContent
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  axios 
      .post(`${baseURL}comments`, comment, config) //ON CHARGE LE NOUVEAU COMMENTAIRE
      .then((res) => setComment([...comment, res.data]))
      .catch((error) => alert ("Error to load comment"))

      setCommentContent("");

}





  return (
    <View style={{position: "relative", height: "100%"}}>
        <View style={{ marginBottom: 60}}>
          <FlatList //UTILISE POUR LISTER LES DONNEE
            data={comment}
            renderItem={({item, index}) => (
              <Item item={item} index={index}/> //ON ENVOIE LA DONNEE DANS LE COMPOSANT ITEM CREE EN HAUT
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      <View style={styles.bottomBar}>
          <View>
            <Text>Commenter</Text>
          </View>
          <View style={{ width: width / 2.5}}>
            <TextInput
             value={commentContent}
              style={styles.input}
              onChangeText={(text) => setCommentContent(text)}
            />
          </View>
          <View>
            <CustomButton
              medium
              primary
              onPress={() => addComent()}
            >
              <Text style={{ color: "white", fontWeight: "bold"}}>Submit</Text>
            </CustomButton>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "white",
    width: width,
    height: 60,
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0
},
input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
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

 
    justifyContent: "space-between",
    borderRadius: 5
}

})
export default Commentaire