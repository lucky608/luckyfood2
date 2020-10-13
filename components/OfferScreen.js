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





export default class OfferScreen extends Component {

 
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (

      <View style={styles.contener}>
            <ScrollView>
          
            <View>

<Image style={styles.Imagebak} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYn8NooNP_edhEebaKbhE-YmcanYDOYwejGQ&usqp=CAU"}} />
</View>
             
           

              <Text style={styles.home}>Latest Offers</Text>
              <Text style={styles.tagline}>tag  line</Text>
  
<View>

<Image style={styles.Imagebreak} source={{uri: "https://i.dlpng.com/static/png/6492534_preview.png"}} />
</View>


          
           <View style={styles.restall}>
           <View>

<Image style={styles.Imagerest} source={{uri: "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"}} />
</View>
 <View>

<Image style={styles.Imagetag} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgFzvmW_RkZo4W1CqCPOvrz2k4naaa0lNW_g&usqp=CAU"}} />
</View>
<Text style={styles.off}>50% OFF-use code LUCKY</Text>
<View>
 <Text style={styles.restname}>Lucky Cafe</Text>
</View>
<View>
 <Text style={styles.restloc}>location</Text>
</View>
 <View>

<Image style={styles.Imagerest} source={{uri: "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"}} />
</View>
 <View>

<Image style={styles.Imagetag} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgFzvmW_RkZo4W1CqCPOvrz2k4naaa0lNW_g&usqp=CAU"}} />
</View>
<Text style={styles.off}>50% OFF-use code LUCKY</Text>
<View>
 <Text style={styles.restname}>Lucky Cafe</Text>
</View>
<View>
 <Text style={styles.restloc}>location</Text>
</View>
 <View>

<Image style={styles.Imagerest} source={{uri: "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"}} />
</View>
 <View>

<Image style={styles.Imagetag} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgFzvmW_RkZo4W1CqCPOvrz2k4naaa0lNW_g&usqp=CAU"}} />
</View>
<Text style={styles.off}>50% OFF-use code LUCKY</Text>
<View>
 <Text style={styles.restname}>Lucky Cafe</Text>
</View>
<View>
 <Text style={styles.restloc}>location</Text>
</View>
</View>

            </ScrollView>
  
          
    
      

     

<View style={styles.mainviewStyle}>
        <View/>
          <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons} onPress={() =>  this.props.navigation.navigate('Home')}>
             
              
<Image style={styles.footericon} source={{uri: "https://www.pngkey.com/png/full/432-4323239_portafolio-house-icon-round.png"}} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons} onPress={() =>  this.props.navigation.navigate('Offer')}>
             
              
             <Image style={styles.footericon} source={{uri: "https://logodix.com/logo/1240291.png"}} />
                       </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons} onPress={() =>  this.props.navigation.navigate('Account')}>
             
          <Image style={styles.footericon} source={{uri: "https://freesvg.org/img/abstract-user-flat-4.png"}} />
          </TouchableHighlight>
          </View>
      </View>

     





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
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -20,
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
    bottom:625,
    left:20
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
    left:23,
    color:'#c0c0c0'
  },
 
  restname:{
bottom:600,
fontSize:20,
fontWeight:'bold',
left:20,

  },
  Imagerest:{
    height:250,
    width:330,
    bottom:10,
   
    top:-570,
    left:16,
    marginBottom:-20
    
    
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
   left:160,
   marginBottom:8,
   top:-100,
   color:'white',fontWeight:'bold'
 },

});

