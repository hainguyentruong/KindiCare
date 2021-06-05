import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, TextInput} from "react-native";
import SignIn from './component/signin';
import SignUp from './component/signup'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VerifyEmail from './component/verifyemail'
// import {SafeAreaProvider} from 'react-native-safe-area-context';


const App = () =>{
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName={'SignInScreen'} headerMode ="none"
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="SignInScreen" component={SignIn}></Stack.Screen>
          <Stack.Screen name="SignUpScreen" component={SignUp}></Stack.Screen>
          <Stack.Screen name="VerifyEmailScreen" component={VerifyEmail}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      
      
    );
  
}
export default App;






