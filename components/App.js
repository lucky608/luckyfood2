import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './StartScreen';
import DeliveryScreen from './DeliveryScreen';
import LiveScreen from './LiveScreen';
import LoginScreen from './LoginScreen';
import SigninScreen from './SigninScreen';
import FirstScreen from './FirstScreen';
import HomeScreen from './HomeScreen';
import OtpfScreen from './OtpfScreen';
import OtpsecScreen from './OtpsecScreen';
import OfferScreen from './OfferScreen';
import ItemType from './ItemType';
import AccountScreen from './AccountScreen';
import OrderScreen from './OrderScreen';
import { NavigationContainer } from '@react-navigation/native';



export default class App extends Component {
    render() {
        return(
          <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="First" component={FirstScreen}  options = {{
                              headerShown: false
                          }} />

                           <Stack.Screen name="Start" component={StartScreen}  options = {{
                              headerShown: false
                          }} />

            <Stack.Screen name="Live" component={LiveScreen}
              options = {{
                              headerShown: false
                          }} />

            <Stack.Screen name="Order" component={OrderScreen}  options = {{
                              headerShown: false
                          }} />

                          
            <Stack.Screen name="Delivery" component={DeliveryScreen}  options = {{
                              headerShown: false
                          }} />
                          

           
                          
                           <Stack.Screen name="Login" component={LoginScreen}  options = {{
                              headerShown: false
                          }} />

                           <Stack.Screen name="Otpf" component={OtpfScreen}  options = {{
                              headerShown: false
                          }} />

                           <Stack.Screen name="Signin" component={SigninScreen}  options = {{
                              headerShown: false
                          }} />


                          <Stack.Screen name="Home" component={HomeScreen}  options = {{
                              headerShown: false
                          }} />

<Stack.Screen name="Otpsec" component={OtpsecScreen}  options = {{
                              headerShown: false
                          }} />
                          

                          <Stack.Screen name="Offer" component={OfferScreen}  options = {{
                              headerShown: false
                          }} />

<Stack.Screen name="ItemType" component={ItemType}  options = {{
                              headerShown: false
                          }} />

                          
<Stack.Screen name="Account" component={AccountScreen}  options = {{
                              headerShown: false
                          }} />
          </Stack.Navigator>
        </NavigationContainer>
        );
    }
}

const Stack = createStackNavigator(); 
