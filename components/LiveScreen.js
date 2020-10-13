import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,PhoneInput,
  TouchableHighlight,
  TouchableWithoutFeedback ,
  Image,
  Alert
} from 'react-native';


export default  class LiveScreen extends Component {

 

  render() {
    return (
      <View style={styles.container}>
       <TouchableHighlight style={[styles.buttonContainere]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.logins}>Log In</Text>
        </TouchableHighlight>
       
<View>

<Image style={styles.Imagelive} source={{uri: "https://icon-library.com/images/45-512_79926.png"}} />
</View>

        <Text style={styles.textone}>Live Treaking </Text>
        <Text style={styles.texttwo}>My app tag line </Text>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Signin')}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableHighlight>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButtons]} onPress={() => this.onClickListener('fb-login')}>
          <Text style={styles.loginTexts}>Countinue with Facebook</Text>
        </TouchableHighlight>

    
        <View>
        <Image style={styles.fblogo} source={{uri: "https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-f-logo-white-background-21.jpg"}} />
        
        </View> 
      </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff5ee',
    },
    buttonContainere:{
  
  
      top:-150,
      left:135
      
    },
   
   
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:5,
      width:290,
      borderRadius:30,
      bottom:-100
    },
  
    loginButton: {
      backgroundColor: "#ff0000",
    },
    loginText: {
      color: 'white',
    },
    loginTexts: {
      color: 'black',
    },
    loginButtons:{
      backgroundColor:"#a9a9a9"
    },
    logins:{
      fontSize:22,
       textDecorationLine: 'underline'
  
    },
    Imagelive:{
      height:150,
      width:170,
      bottom:39
    },
    textone:{
      fontSize:25,
      color:'red',
      fontWeight:'bold',
      bottom:0
    },
    texttwo:{
        fontSize:10,
        color:'red',
        fontWeight:'bold',
        bottom:-10
      },
    fblogo:{
          height:30,
          width:30,marginTop:0,
          bottom:-58,
          left:-112
        }
  });
