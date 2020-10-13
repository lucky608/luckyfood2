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
        <TouchableHighlight style={{height:35,width:35,bottom:150,right:140}} onPress={() =>this.props.navigation.goBack()}>
<View>
        <Image style={{height:35,width:35,}} source={{uri: "https://image.flaticon.com/icons/png/512/93/93634.png"}} />
        
        </View> 
        </TouchableHighlight>
<View>

<Image style={{height:120,width:120,top:-20,
}} source={{uri: "https://images.vexels.com/media/users/3/135149/isolated/preview/f7da46129f048eafb4bb8d23b14b00af-message-sign-with-background-by-vexels.png"}} />
</View>


        
       
       
        <Image style={styles.bgImage} source={{uri: "https://png.pngtree.com/png-clipart/20190116/ourlarge/pngtree-fantasy-starry-sky-colorful-powder-texture-effect-cool-png-image_382684.jpg"}}/>
    <View style={styles.inputContainer}>
    <TextInput  style={{width: '80%', height: 200}}
        placeholder="Email"
        keyboardType="email-address"
        underlineColorAndroid='transparent'
        onChangeText={(email) => this.setState({email})}/>
    
    
    

     
</View>


        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Otpsec')}>
          <Text style={styles.loginText}>GET OTP</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('privacy_policy')}>
           
            <Text style={styles.baseText}>
      We will send you one time password (OTP)
      on your email.
     
    </Text>
        </TouchableHighlight>


<View>
        <Text style={{marginLeft:10,marginHorizontal:20,marginVertical:-500,color:"#ff0000",fontSize:26,fontStyle:"italic",
       marginLeft:20,top:90 }}>
          <Text>OTP Verification</Text>
        </Text>
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
  borderStyleBase: {
    width: 30,
    height: 200
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:7,
      flexDirection: 'row',
      alignItems:'center',
      marginVertical:10,
      bottom:-50,
      lineHeight: 22,
    paddingLeft:20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 14,
      
      
  },
  baseText: {
    fontWeight: 'normal',
    fontSize:12,
    bottom:230,
     color:"#9C27B0",
     opacity: 0.4,
   
  },
  innerText: {
    color: '#00bfff',
    textDecorationLine: 'underline'
    
  },
  innersText:{

    color:'#ff0000'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      fontSize:20
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainers:{
   marginVertical:0,
   
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:250,
    borderRadius:30,
    bottom:-80,
   
  },
  loginButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  }
});

