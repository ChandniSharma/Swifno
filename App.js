/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AsyncStorage,Alert} from 'react-native';
//import {createStackNavigator ,createSwitchNavigator, SafeAreaView} from 'react-navigation';
import WelcomeScreen from './src/welcome/WelcomeScreen';
import Login from "./src/views/Login";
import ForgotPasswordComponent from './src/views/ForgotPassword';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  ForgotPasswordComponent: {screen: ForgotPasswordComponent},
},{
  initialRouteName: 'Login',
//  initialRouteName: 'PlayAudioClass',
  gesturesEnabled: false,
  headerMode: 'none',
}
);

const RootNavigator = createAppContainer(MainNavigator)
//export default RootNavigator

export default class App extends Component {
  render() {
    return (
     <RootNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
