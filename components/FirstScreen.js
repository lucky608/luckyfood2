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

<Image style={{height:170,width:250,bottom:60}} source={{uri: "https://www.pinclipart.com/picdir/big/75-753660_france-clipart-food-side-comida-chatarra-dibujo-png.png"}} />
</View>

        <Text style={{fontSize:25,color:'red',fontWeight:'bold',bottom:60}}>Find foods you love </Text>
        <Text style={{fontSize:10,color:'red',fontWeight:'bold',bottom:50}}>My app tag line </Text>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Signin')}>
          <Text style={styles.loginText}>Create Account</Text>
        </TouchableHighlight>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButtons]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginTexts}>Countinue with Facebook</Text>
        </TouchableHighlight>

    
        <View>
        <Image style={{height:30,width:30,marginTop:0,bottom:-38,left:-112}} source={{uri: "https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-f-logo-white-background-21.jpg"}} />
        
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
    bottom:-80
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


