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




export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      name:'',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableHighlight style={[styles.buttonContainere]} onPress={() =>this.props.navigation.navigate('Login')}>
          <Text style={{fontSize:22, textDecorationLine: 'underline'}}>Log In</Text>
        </TouchableHighlight>
       
<View>

<Image style={{height:250,width:270,bottom:0}} source={{uri: "https://www.uberlikeapp.com/images/products/delivery_boy.gif"}} />
</View>
<View>

<Image style={{height:100,width:70,bottom:300,left:40}} source={{uri: "https://www.jing.fm/clipimg/full/288-2885551_stopwatch-icon.png"}} />
</View>
        <Text style={{fontSize:25,color:'red',fontWeight:'bold',bottom:60}}>Fast Delivery </Text>
        <Text style={{fontSize:10,color:'red',fontWeight:'bold',bottom:50}}>My app tag line </Text>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableHighlight>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButtons]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginTexts}>Countinue with Facebook</Text>
        </TouchableHighlight>

    
        <View>
        <Image style={{height:30,width:30,marginTop:0,bottom:3,left:-112}} source={{uri: "https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-f-logo-white-background-21.jpg"}} />
        
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


    top:-50,
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
    bottom:-40
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
  }
});