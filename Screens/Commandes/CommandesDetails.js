import React, {useState, useEffect} from 'react'
import { Image, Text,StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper/src'
import CustomButton from '../../Shared/StyledComponents/CustomButton'
import axios from "axios"
import moment from "moment";
import baseURL from '../../assets/data/common/baseURL'


var {width} = Dimensions.get('window')

const CommandesDetails = (props) => {
const [item, setItem] = useState(props.route.params.item);

const [bannerData, setBannerData] = useState([]) 

    useEffect(() => {
        
        setBannerData([item.photos[0], item.photos[1], item.photos[2]]);
        return () => {
          setBannerData([]);
        };
      }, []);


  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.swiper}>
        <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
        >
            {bannerData.map((itemm) => {
            return (
                <Image
                key={itemm}
                style={styles.imageBanner}
                resizeMode="contain"
                source={{ uri: itemm}}
                />
            );
            })}
        </Swiper>
   
        </View>
        <View style={styles.infoplus}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                <Text style={{fontSize: 20, color: 'green'}}>{item.title}</Text>
                <Text style={{fontSize: 20, fontWeight:"800", color: 'purple'}}>  {item.price}</Text>
            </View>
      
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'gray' }}>Réservé par:</Text>
                <Text style={{fontSize: 20, fontWeight:"600", }}>  {item.last_name.toUpperCase()} {item.first_name.toUpperCase()}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'gray' }}>Addresse:</Text>
                <Text style={{fontSize: 20, fontWeight:"600", }}> 21 Wall Street</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: 'gray' }}>Phone:</Text>
                <Text style={{fontSize: 20, fontWeight:"600", }}> +33 365 235 255</Text>
            </View>
            <View style={{flexDirection: 'row'}}>

                <Text style={{fontSize: 18, color: 'gray'}}> Du:</Text>
                <Text style={{fontSize: 18, fontWeight:"600"}}>  {moment(item.start_date).format(" D MMMM YYYY")}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18,color: 'gray' }}> Au:</Text>
                <Text style={{fontSize: 18, fontWeight:"600"}}>  {moment(item.end_date).format(" D MMMM YYYY")}</Text>
    
            </View>
            
            <View style={{flex:1, justifyContent: "center", alignItems: "center", marginTop: 50}}>
                <CustomButton
                    danger large
                    >
                        <Text style={{color: "white", fontSize: 15, fontWeight: "400"}}>Annuler</Text>
                    </CustomButton>
    </View>
         
            
        </View>
       
    </View>     
    
 </ScrollView>
)
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "gainsboro",
},
swiper: {
  width: width,

},
imageBanner: {
  height: 300 ,
  width: width,
  borderRadius: 5,
  marginHorizontal: 0,
},
infoplus: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    marginTop: 20

}
});
export default CommandesDetails