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
            <TouchableHighlight style={{height:35,width:35,top:20,left:15}} onPress={() =>this.props.navigation.goBack()}>
<View>
        <Image style={{height:35,width:35}} source={{uri: "https://image.flaticon.com/icons/png/512/93/93634.png"}} />
        
        </View> 
        </TouchableHighlight>
          
              <Text style={styles.loc}>NAME OF USER</Text>
             
              <Text style={styles.home}>EMAIL</Text>
   
         <Text style ={styles.my}>My Account</Text>

         
         <View>

<Image style={styles.Imagelines} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
</View>
<View>
<Text style={styles.add}>Add 1</Text>
<Text style=
{styles.adda}>xyz</Text>
 

<Image style={styles.Imagelinee} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />

</View>

<View>
<Text style={styles.add}>Add 2</Text>
<Text style=
{styles.adda}>xyz</Text>
 

<Image style={styles.Imagelinee} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />

</View>


<View>
<Text style={styles.add}>Add 3</Text>
<Text style=
{styles.adda}>xyz</Text>
 

<Image style={styles.Imagelinee} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />

</View>



<Text style={styles.past}>PAST ORDERS</Text>

<View>

<Image style={styles.Imageliness} source={{uri: "https://img.pngio.com/horizontal-line-png-images-transparent-free-download-pngmartcom-white-line-png-775_300.png"}} />
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
  past:{
      top:50,
      left:40,
      marginBottom:100
  },
  adda:{
      left:160,
      bottom:28,
      fontSize:17
  },
  Imagelines:{
    height:10,
    width:360,
    bottom:10,
   
   
    left:4,
    marginBottom:-20,
    marginVertical:-10
  },

  Imagelinee:{
    height:10,
    width:315,
    bottom:18,
   
   
    left:50,
    marginBottom:-20
  },
  Imageliness:{
    height:10,
    width:360,
    bottom:37,
   
   
    left:4,
    marginBottom:-20,
    marginVertical:-10
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
  add:{
      left:60,
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
  my:{
    left:30,
    bottom:20,
    fontSize:17
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
   top:10,
  fontSize:12,
  fontWeight:'bold',
  left:10,
  textDecorationLine:'underline',
  marginTop:50
  
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
   fontSize:10,
   top:0,
   marginTop:-20,
   left:10,
   marginBottom:100,
   top:30
 },
 inputs:{
   left:50,
   top:6,
   fontSize:18,
   marginBottom:3
   
 }
});
