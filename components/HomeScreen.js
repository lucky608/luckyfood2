

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableOpacity ,
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
          
            <View style={styles.inputContainer}> 

            <TextInput style={styles.inputs}
              ref={'txtSearch'}
             
              placeholder="Search..."
              
              underlineColorAndroid='transparent'
              onChangeText={(name_address) => this.setState({name_address})}/>

             
              </View>
              <Text style={styles.loc}>CURRENT LOCATION</Text>
              <View>

<Image style={styles.Imagesear} source={{uri: "https://www.sitewelder.com/art2012/logo-big-searchoptimization.png"}} />
</View>
<View>

<Image style={styles.Imagemenu} source={{uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/hamburger-menu-2-520710.png"}} />
</View>
              <Text style={styles.home}>Categories</Text>
             
 <ScrollView    horizontal={true}>
      
         
 <TouchableHighlight style={{top:6, height:100,
    width:100,
    bottom:-30,
    marginTop:-5,
    marginLeft:15,
    margin:20,
    left:10,
    marginRight:25
    
   }} onPress={() =>this.props.navigation.navigate('ItemType')}>
 <View>

<Image style={styles.Imagebreak} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDDZw4soppBGwVD9xiddb7m9b2ZPkpyBrOWA&usqp=CAU"}} />
</View> 
        </TouchableHighlight>

<View>

<Image style={styles.Imagebreak} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqIckKVIoMQXBYzQJj3ufBlFxfVQdueDMr2A&usqp=CAU"}} />
</View>
<View>

<Image style={styles.Imagebreak} source={{uri: "https://www.kindpng.com/picc/m/126-1265937_fully-cooked-meal-with-healthy-salmon-salmon-meal.png"}} />
</View>
<View>

<Image style={styles.Imagebreak} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDDZw4soppBGwVD9xiddb7m9b2ZPkpyBrOWA&usqp=CAU"}} />
</View>
<View>

<Image style={styles.Imagebreak} source={{uri: "https://lh3.googleusercontent.com/7OP6mKLQw-0WV4TwZQR7QsYmuAHHESGFzbm8rYJLvfYDoCB96mlwe4kHrW1dzIGQa5QcNR6VpVCKjyksGGQ-1Q=s343-c-rj-v1-e365"}} />
</View>

<View>
 <Text style={styles.bur}>Burgers</Text>
</View>
<View>
 <Text style={styles.pizza}>Pizzzza</Text>
</View>
<View>
 <Text style={styles.break}>Break Fast</Text>
</View>
<View>
 <Text style={styles.cold}>Cold</Text>
</View>
<View>
 <Text style={styles.coffe}>Cold Coffe</Text>
</View>

           </ScrollView>
           <View style={styles.restall}>
           <View>

<Image style={styles.Imagerest} source={{uri: "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"}} />
</View>
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
 <Text style={styles.restname}>Lucky Cafe</Text>
</View>
<View>
 <Text style={styles.restloc}>location</Text>
</View>
 <View>

<Image style={styles.Imagerest} source={{uri: "https://www.sundayguardianlive.com/wp-content/uploads/2020/07/3-Dib-restaurant-losses-edited.jpg"}} />
</View>
<View>
 <Text style={styles.restname}>Lucky Cafe</Text>
</View>
<View>
 <Text style={styles.restloc}>location</Text>
</View>
</View>

            </ScrollView>
  
          


            <View style={styles.mainviewStyles}>
        <View/>
          <View style={styles.footers}>
          <TouchableHighlight style={styles.bottomButtonss} onPress={() =>  this.props.navigation.navigate('Home')}>
             
              
<Image style={styles.footericons} source={{uri: "https://www.pngkey.com/png/full/432-4323239_portafolio-house-icon-round.png"}} />
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtonss} onPress={() =>  this.props.navigation.navigate('Offer')}>
             
              
             <Image style={styles.footericons} source={{uri: "https://logodix.com/logo/1240291.png"}} />
                       </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtonss} onPress={() =>  this.props.navigation.navigate('Account')}>
             
          <Image style={styles.footericons} source={{uri: "https://freesvg.org/img/abstract-user-flat-4.png"}} />
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
  footerss:{

    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    
    
  },
  mainviewStyles: {
    flex: 1,
    flexDirection: 'column',
  },
  footers: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -20,
    backgroundColor:'#455A64',
    flexDirection:'row',
    height:80,
    alignItems:'center',
    width:360
  },
  bottomButtonss: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    

  },
  footericons:{
    
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
   
   bottom:10,
   
   
    
    left:1,
    
    
  },
  profile:{
    color:'#bc8f8f',
    fontSize:12,
flex:1,
left:80,
bottom:10

  },
  profileicon:{
    borderBottomWidth: 35,
    marginTop:-20,
   
    alignItems:'center',
    flex:1,
    width:35,
    bottom:10,
    left:280
  },
 
  footcon:{
   bottom:-70,
   top:1
  },
  offericon:{
    borderBottomWidth: 35,
    marginTop:-20,
   
    alignItems:'center',
    flex:1,
    width:35,
    bottom:-4,
    left:153
    
  },
  offer:{
    color:'#bc8f8f',
    fontSize:12,
flex:1,
left:120,
bottom:10
  },
  footericon:{
    
    borderBottomWidth: 45,
    height:5,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    width:35,
    top:26,
    left:37,
    marginTop:-20
    

  },
 
  Imagefooter:{

   
    
    borderBottomWidth: 45,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    width:370,
    top:45
    
  
  },
  foots:{
     color:'#bc8f8f',
     fontSize:12,
     left:20,
     bottom:10,
     left:37
     

  },
  

  footer:{position: 'absolute',
   
  borderBottomWidth: 45,
  height:45,
  flexDirection: 'row',
  alignItems:'center',
  flex:1,
  width:370,
  top:45,
  
  
  },
 
    restall:{
  marginVertical:0,
  marginBottom:30,
  paddingBottom:20,
 
  },
  Imagesear:{
height:30,
width:30,
bottom:20,
left:23

  },
  Imagemenu:{

    height:23,
    width:23,
    left:312,
    bottom:48 
  },
  container: {
   
    backgroundColor: 'white',
  },
  inputContainer: {
    borderBottomColor: '#a9a9a9',
    backgroundColor: '#f5fffa',
    borderRadius:30,
    borderBottomWidth: 1,
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    margin:10,
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
bottom:410,
fontSize:20,
fontWeight:'bold',
left:20
  },
  Imagerest:{
    height:250,
    width:330,
    bottom:40,
   
    top:-390,
    left:16,
    marginBottom:20
    
    
  },
  Imagebreak:{
    height:130,
    width:100,
    bottom:40,
   marginBottom:400,
    marginLeft:10,
    margin:10,
    bottom:40,
    right:10,
    
    
  },
  bur:{
top:100,
right:570,

  },
  pizza:{
right:500,
top:100
  },
  break:{
    top:100,
    right:435


  },
  cold:{
top:100,
right:370


  },
  coffe:{
 top:100,
 right:300
  },
 

 home:{
   fontSize:22,
   top:0,
   marginTop:-20,
   left:10,
   marginBottom:8
 },
 inputs:{
   left:50,
   top:6,
   fontSize:18,
   marginBottom:3
   
 }
});

