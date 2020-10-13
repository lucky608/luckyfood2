
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
       <TouchableHighlight style={{height:35,width:35,bottom:80,right:140}} onPress={() =>this.props.navigation.goBack()}>
<View>
        <Image style={{height:35,width:35,}} source={{uri: "https://image.flaticon.com/icons/png/512/93/93634.png"}} />
        
        </View> 
        </TouchableHighlight>
<View>

<Image style={{height:120,width:120,top:20}} source={{uri: "https://images.vexels.com/media/users/3/136497/isolated/preview/4a0c161a0b2cc3b23395675e5aaaf73c-opened-message-square-icon-by-vexels.png"}} />
</View>


        <View style={styles.inputContainer}>
       
        <TextInput  style={{width: '80%', height: 200}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    keyboardType='numeric'
    returnKeyType="next"
    onSubmitEditing={() => { this.secondTextInput.focus(); }}
    blurOnSubmit={false}
    style={{fontSize:20}}
    
    
/>
     
</View>
<View style={styles.inputContainer}>
       
       <TextInput  style={{width: '80%', height: 200}}
   pinCount={4}
   // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
   // onCodeChanged = {code => { this.setState({code})}}
   autoFocusOnLoad
   codeInputFieldStyle={styles.underlineStyleBase}
   ref={(input) => { this.secondTextInput = input; }}
   codeInputHighlightStyle={styles.underlineStyleHighLighted}
   keyboardType='numeric'
   returnKeyType="next"
   onSubmitEditing={() => { this.thirdTextInput.focus(); }}
   blurOnSubmit={false}
   style={{fontSize:20}}
/>
        </View>
        <View style={styles.inputContainer}>
       
       <TextInput  style={{width: '80%', height: 200}}
   pinCount={4}
   // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
   // onCodeChanged = {code => { this.setState({code})}}
   autoFocusOnLoad
   codeInputFieldStyle={styles.underlineStyleBase}
   ref={(input) => { this.thirdTextInput = input; }}
   codeInputHighlightStyle={styles.underlineStyleHighLighted}
   keyboardType='numeric'
   returnKeyType="next"
   onSubmitEditing={() => { this.fourTextInput.focus(); }}
   blurOnSubmit={false}
   style={{fontSize:20}}
   
/>
        </View>
        <View style={styles.inputContainer}>
       
       <TextInput  style={{width: '80%', height: 200}}
   pinCount={4}
   // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
   // onCodeChanged = {code => { this.setState({code})}}
   autoFocusOnLoad
   codeInputFieldStyle={styles.underlineStyleBase}
   ref={(input) => { this.fourTextInput = input; }}
   codeInputHighlightStyle={styles.underlineStyleHighLighted}
   keyboardType='numeric'
   style={{fontSize:20}}
   
/>
        </View>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>VERIFY</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('privacy_policy')}>
           
            <Text style={styles.baseText}>
      Didn't recaive a OTP?<Text style={styles.innerText}>Resend OTP</Text>
     
    </Text>
        </TouchableHighlight>


<View>
        <Text style={{marginLeft:10,marginHorizontal:20,marginVertical:-500,color:"#ff0000",fontSize:26,fontStyle:"italic",
       marginLeft:20,top:30 }}>
          <Text>Enter Verificatin Code</Text>
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
    height: 45
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
      width:40,
      height:45,
      marginBottom:7,
      flexDirection: 'row',
      alignItems:'center',
      marginVertical:0,
      bottom:-50,
      
  },
  baseText: {
    fontWeight: 'normal',
    fontSize:12,
   
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
    bottom:-80
  },
  loginButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  }
});

