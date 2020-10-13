import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
 Button,
  Image,
  TouchableOpacity ,
  TouchableHighlight,
  Alert, ScrollView
} from 'react-native';





export default class HomeScreen extends Component {
    
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

    render() {
        return (
            <View style={styles.contener}>



<Image style={styles.Imagecart} source={{uri: "https://hime-restaurant.now.sh/static/media/empty-cart.e92b81f2.png"}} />
<Text style={styles.cart}>Add something to make me happy :)</Text>

     </View>
            );
        }
      }
      

      
const styles = StyleSheet.create({
    contener:{
  flex:1,
  backgroundColor: 'white',
  marginBottom:0
      
    },
    Imagecart:{

alignItems:'center',
height:200,
width:200,
left:75,
top:200
    },
    cart:{
        fontSize:11,
        left:80,
        top:200
    },

});