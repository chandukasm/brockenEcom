import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createStackNavigator}   from 'react-navigation'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import App from "./App";




const  AuthStakNavigator = createStackNavigator({
    
    Welcome : WelcomeScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen
},{
  navigationOptions:{
    headerTitle:'Elysium-X',
    justifyContent:'center'
  }
})











export default createSwitchNavigator ({
             // AuthLoading : AuthLoadingScreen,
              Auth :AuthStakNavigator,
              App : App
})

















const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});