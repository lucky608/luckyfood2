import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
 Button,
  Image,
  TouchableOpacity,
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
            <ScrollView>
            <TouchableHighlight style={{height:35,width:35,top:20,right:-10}} onPress={() =>this.props.navigation.goBack()}>
<View>
        <Image style={{height:35,width:35}} source={{uri: "https://image.flaticon.com/icons/png/512/93/93634.png"}} />
        
        </View> 
        </TouchableHighlight>
            <View>
            <Text style={styles.deli}>DELIVERY AT</Text>
            </View>
            <View>
            <Text style={styles.add}>address</Text>
            </View>
            <View>
            <Text style={styles.time}>Delivey in _ mins with live tracking</Text>
            </View>
          

           
             
              <Text style={styles.home}>YOUR ITEM</Text>
              
             
 
           <View style={styles.restall}>
          
<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.price}>Rs. 00.00</Text>
</View>
<View>
 <Text style={styles.cont}>Quantity</Text>
</View>
 <View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 
<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.price}>Rs. 00.00</Text>
</View>
<View>
 <Text style={styles.cont}>Quantity</Text>
</View>
 <View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 

<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.price}>Rs. 00.00</Text>
</View>
<View>
 <Text style={styles.cont}>Quantity</Text>
</View>
 <View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
  <View style={styles.inputContainer}> 

<TextInput style={styles.inputs}
  ref={'txtSearch'}
 
  placeholder="apply promo code"
  
  underlineColorAndroid='transparent'
  onChangeText={(name_address) => this.setState({name_address})}/>

 
  </View>
  <View>
 <Text style={styles.itotal}>Item Total</Text>
</View>
<View>
    <Text style={styles.total}>Rs. 00.00</Text>
</View>
<Text style={styles.tex}>Texes&charges</Text>
<Text style={styles.charge}>Rs. 00.00</Text>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>

<Text style={styles.gtotal}>Grand Total</Text>
<Text style={styles.grand}>Rs. 00.00</Text>

</View>

            </ScrollView>
  
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Order Now</Text>
        </TouchableHighlight>
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
  tex:{
      top:40,
      left:20,
      color:'#808080'
  },
  gtotal:{
    fontSize:17,
    top:30,
    marginBottom:10,
    left:20,
    fontWeight:'bold'
  },
  grand:{
    top:0,
    left:260
    
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:250,
    borderRadius:30,
    left:50
  },
  loginButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  charge:{
     
left:260,
top:20,
color:'#808080',
fontSize:12
  },
  total:{

left:260,
top:25
  },
  cont:{
      fontSize:12,
      left:20
  },
  Imageline:{
    height:10,
    width:360,
   
   
    top:40,
    left:0,
    marginBottom:20
  },
  itotal:{
      fontSize:17,
      top:60,
      marginBottom:10,
      left:20,
      fontWeight:'bold'
  },

  price:{

    left:260,
    top:-10
  },
  add:{
      fontSize:15,
      top:20,
      left:15,
      color:'#808080'
  },
  time:{
     fontSize:12,
     color:'#808080',
     left:15,
     top:15
  },
 
 
    restall:{
  marginVertical:0,
  marginBottom:30,
  paddingBottom:20,
 
  },

deli:{

    fontSize:17,
    top:25,
    color:'#4b0082',
    fontWeight:'bold',
    left:10,
    marginTop:30
},
  
  Imagemenu:{

    height:35,
    width:35,
    left:20,
    top:30 
  },
  container: {
   
    backgroundColor: 'white',
  },
  inputContainer: {
    borderBottomColor: '#a9a9a9',
    backgroundColor: '#f5fffa',
    borderRadius:0,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:0,
    top:50
  },
  restloc:{

    bottom:410,
    left:23,
    color:'#c0c0c0'
  },
  loc:{
  bottom:45,
  fontSize:16,
  fontWeight:'bold',
  left:10,
  textDecorationLine:'underline',
  
  },
  restname:{
bottom:-10,
fontSize:20,
fontWeight:'bold',
left:20,
marginTop:40
  },

 home:{
   fontSize:17,
   top:50,
   marginTop:10,
   left:10,
   marginBottom:8,
   textDecorationLine:'underline',
 },
 
 inputs:{
   left:30,
   top:6,
   fontSize:18,
   marginBottom:3
   
 }
});
