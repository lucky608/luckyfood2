import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Button,
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
            <TouchableHighlight style={{height:35,width:35,top:20,right:-10}} onPress={() =>this.props.navigation.goBack()}>
<View>
        <Image style={{height:35,width:35}} source={{uri: "https://image.flaticon.com/icons/png/512/93/93634.png"}} />
        
        </View> 
        </TouchableHighlight>
             
           
              <Text style={styles.loc}>Really Cool Bargers</Text>
              <Text style={styles.name}>Name of restaurants </Text>
              <Text style={styles.locname}>location</Text>

             
<View>

<Image style={styles.Imagemenu} source={{uri: "https://static.thenounproject.com/png/1991936-200.png"}} />
</View>
              <Text style={styles.home}>Categories</Text>
             
 <ScrollView    horizontal={true}>
      
           <View>

<Image style={styles.Imagebreak} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDDZw4soppBGwVD9xiddb7m9b2ZPkpyBrOWA&usqp=CAU"}} />
</View>

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
           <Text style={styles.item}>Bargers</Text>
          


<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
 <Text style={styles.restloc}>Rating</Text>
 <Text style={styles.off}>Name of restaurants </Text>
 <Text style={styles.price}>Rs. 00.00</Text>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 

<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.restloc}>Rating</Text>
</View>
<Text style={styles.off}>Name of restaurants </Text>
<Text style={styles.price}>Rs. 00.00</Text>


<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 
 

<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.restloc}>Rating</Text>
 <Text style={styles.off}>Name of restaurants </Text>
 <Text style={styles.price}>Rs. 00.00</Text>
</View>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
           </View>
           
           <View style={styles.restall}>
           <Text style={styles.item}>Snacks</Text>
          


<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
 <Text style={styles.restloc}>Rating</Text>
 <Text style={styles.off}>Name of restaurants </Text>
 <Text style={styles.price}>Rs. 00.00</Text>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 

<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.restloc}>Rating</Text>
</View>
<Text style={styles.off}>Name of restaurants </Text>
<Text style={styles.price}>Rs. 00.00</Text>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
 
 

<View>
 <Text style={styles.restname}>Name of item</Text>
</View>
<View>
 <Text style={styles.restloc}>Rating</Text>
 <Text style={styles.off}>Name of restaurants </Text>
 <Text style={styles.price}>Rs. 00.00</Text>
</View>
<View>

<Image style={styles.Imageline} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
           </View>

            </ScrollView>
            <TouchableHighlight style={[styles.buttonCart, styles.cart]} onPress={() =>  this.props.navigation.navigate('Order')}>
          <Text style={styles.loginText}>Go to cart</Text>
        </TouchableHighlight>


         </View>
         
      
    );
  }
}



const styles = StyleSheet.create({
  contener:{
flex:1,
backgroundColor: 'white',
    
  },
  buttonCart:{
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:3,
    width:250,
    borderRadius:30,
    left:40
  },
  
  cart:{
  backgroundColor: "#ff0000",
},
loginText: {
  color: 'white',
  fontSize:17
},
  footerss:{

    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    
    
  },
  name:{
    bottom:-10,
    fontSize:9,
   
    left:10,
 
  },
  price:{
    bottom:475,
    left:270,
    color:'black',
    fontWeight:'bold'
  },
  locname:{
    bottom:-10,
  fontSize:9,
  marginBottom:16,
  left:10,
  textDecorationLine:'underline',   
  },
  profile:{
    color:'#bc8f8f',
    fontSize:12,
flex:1,
left:80,
bottom:10

  },
  Imagebak:{
    height:300,
    width:360,
  
    marginBottom:-100,
    marginLeft:0,
    
    bottom:70,
    borderRadius:30,
    
  },
  item:{
    fontSize:25,
    top:-400,
    marginTop:-10,
    left:10,
    marginBottom:26,
    textDecorationLine:'underline',  
    color:'#b22222'
      
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
  Imageline:{
    height:10,
    width:360,
   
   
    top:-430,
    left:0,
    marginBottom:-20
  },
  restname:{
    bottom:640,
    fontSize:20,
    fontWeight:'bold',
    left:120,
    
    
      },
  restloc:{

    bottom:600,
    left:120,
    color:'#c0c0c0'
  },
 
  off:{
    bottom:400,
    left:20,
    marginBottom:25
  },
 
  

 
 
    restall:{
  marginVertical:0,
  marginBottom:10,
  paddingBottom:20,
 
  },
  
  Imagemenu:{

    height:40,
    width:40,
    left:9,
    bottom:290
  },
  container: {
   
    backgroundColor: 'white',
  },
 
  restloc:{

    bottom:410,
    left:23,
    color:'#c0c0c0'
  },
  loc:{
  bottom:-30,
  fontSize:25,
  fontWeight:'bold',
  left:10,
  
  textDecorationLine:'underline',
  marginBottom:20
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
    bottom:40
    
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
   marginBottom:8,
   textDecorationLine:'underline',  
   color:'#b22222'
 },
 inputs:{
   left:50,
   top:6,
   fontSize:18,
   marginBottom:3
   
 }
});
