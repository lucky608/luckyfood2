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
  TouchableOpacity ,
  Alert, ScrollView
} from 'react-native';
import OfferScreen from './OfferScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';  



 class ItemList extends React.Component {

 
 
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (

      <View style={styles.contener}>
            <ScrollView>
          
            <View>

<Image style={styles.Imagebak} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLQjlBMHL2B-JMDjooaAt0xly_oif6ayGwKA&usqp=CAU"}} />
</View>
             
           

              <Text style={styles.home}>Burgers</Text>


          
           <View style={styles.restall}>
           <View>

<Image style={styles.Imagerest} source={{uri: "https://3.imimg.com/data3/FS/XU/MY-15332619/foods-500x500.png"}} />
</View>


<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
 <Text style={styles.restloc}>Rating</Text>
 <Text style={styles.off}>Name of restaurants </Text>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 <View>

<Image style={styles.Imagerest} source={{uri: "https://3.imimg.com/data3/FS/XU/MY-15332619/foods-500x500.png"}} />
</View>
 

<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.restloc}>Rating</Text>
</View>
<Text style={styles.off}>Name of restaurants </Text>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 <View>

<Image style={styles.Imagerest} source={{uri: "https://3.imimg.com/data3/FS/XU/MY-15332619/foods-500x500.png"}} />
</View>
 

<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.restloc}>Rating</Text>
 <Text style={styles.off}>Name of restaurants </Text>
</View>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
</View>

            </ScrollView>
  
           
      </View>
         
      
    );
  }
}

const styles = StyleSheet.create({
  contener:{
flex:1,
backgroundColor: 'white',
    
  },
  mainviewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  Imageline:{
    height:10,
    width:360,
    bottom:30,
   
    top:-600,
    left:4,
    marginBottom:-20
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'#455A64',
    flexDirection:'row',
    height:80,
    alignItems:'center',
  },
  bottomButtons: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
  },
  footerText: {
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:18,
  },
  Imagetag:{
    height:30,
    width:200,
    bottom:600,left:20
  },
 
  touchable: {
    flexDirection:'column',
    justifyContent: 'center'
  },
  off:{
    bottom:655,
    left:120
  },
  restall:{
      marginTop:570
  },
 
  Imagebak:{
    height:300,
    width:360,
  
    marginBottom:-100,
    marginLeft:0,
    
    bottom:70,
    borderRadius:30,
    
  },
  tagline:{
    fontSize:12,
    top:0,
    marginTop:10,
    left:160,
    marginBottom:8,
    top:-100,
    color:'white',
    fontWeight:'bold'

  },
  offer:{
    color:'#bc8f8f',
    fontSize:12,
flex:1,
left:120,
bottom:10
  },
  footericon:{
    
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
   
   bottom:10,
   
   
    
    left:1,
    
    
  },
 

  
  
  
 
  Imagesear:{
height:30,
width:30,
bottom:20,
left:23

  },
 
  container: {
   
    backgroundColor: 'white',
  },
  
  restloc:{

    bottom:600,
    left:120,
    color:'#c0c0c0'
  },
 
  restname:{
bottom:640,
fontSize:20,
fontWeight:'bold',
left:120,

  },
  Imagerest:{
    height:100,
    width:100,
    bottom:10,
    borderRadius:10,
    top:-570,
    left:16,
    marginBottom:-30
    
    
  },
  Imagebreak:{
    height:130,
    width:170,
  
    marginBottom:400,
    marginLeft:0,
    margin:10,
    bottom:200
    
  },

 home:{
   fontSize:22,
   top:0,
   marginTop:10,
   left:20,
   marginBottom:8,
   top:-20,
   color:'white',fontWeight:'bold',
 },

});

  
const AppNavigator = createStackNavigator(  
  {  
     Home:ItemList,
      Profile: OfferScreen  
  },  
  {  
      initialRouteName: "Home"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
 class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}