

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
      phone:'',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
     
      <View style={styles.container}>
 <TouchableHighlight style={{height:35,width:35,top:0,right:140}} onPress={() =>this.props.navigation.goBack()}>
<View>
        <Image style={{height:35,width:35,}} source={{uri: "https://image.flaticon.com/icons/png/512/93/93634.png"}} />
        
        </View> 
        </TouchableHighlight>
<View style={ {borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:340,
      height:45,
      marginBottom:7,
      flexDirection: 'row',
      alignItems:'center',
      marginVertical:250}}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="name"
              underlineColorAndroid='transparent'
             />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
       
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
        <TextInput style={{ height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,}}
   keyboardType='numeric'
   
   placeholder="Phone"
   onChangeText={(text)=> this.onChanged(text)}
   underlineColorAndroid='transparent'
/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>  this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('privacy_policy')}>
           
            <Text style={styles.baseText}>
            By creating an account you agree to our
      <Text style={styles.innerText}> privacy policy and terms condition</Text>.
    </Text>
        </TouchableHighlight>

        <TouchableHighlight style={{paddingBottom:0,top:30}} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Already an account? <Text style={styles.innersText}>Login</Text> here.
     </Text>
        </TouchableHighlight>

<View>
        <Text style={{marginLeft:10,marginHorizontal:20,marginVertical:-558,color:"#ff0000",fontSize:34,fontStyle:"italic",
       marginLeft:20 }}>
          <Text>Create your 
          Account</Text>
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
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:340,
      height:45,
      marginBottom:7,
      flexDirection: 'row',
      alignItems:'center'
  },
  baseText: {
    fontWeight: 'normal',
    fontSize:9.5,
   
  },
  innerText: {
    color: '#00bfff'
  },
  innersText:{

    color:'#ff0000'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
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
  },
  loginButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  }
});
