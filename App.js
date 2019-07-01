/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';


import {Platform, StyleSheet, Text, View, AsyncStorage,Alert} from 'react-native';
//import {createStackNavigator ,createSwitchNavigator, SafeAreaView} from 'react-navigation';
import WelcomeScreen from './src/welcome/WelcomeScreen';
import LoginContainer from "./src/containers/Login";
//import Login from "./src/views/Login";
import ForgotPasswordComponent from './src/views/ForgotPassword';
import Tutorial from './src/views/Tutorial';
import Dashboard from './src/views/Dashboard';
import Signup from './src/views/Signup';
import ChangePasswordContainer  from './src/containers/ChangePassword';
import Route from './src/views/common/Route';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Tutorial:{screen: Tutorial},
  Login: {screen: LoginContainer},
  ForgotPasswordComponent: {screen: ForgotPasswordComponent},
  Dashboard:{screen:Dashboard},
  Signup: {screen: Signup},
  ChangePasswordContainer: {screen: ChangePasswordContainer},
  Route:{screen:Route},
},{
  //initialRouteName: 'Tutorial',
  initialRouteName: 'ChangePasswordContainer',
  gesturesEnabled: false,
  headerMode: 'none',
}
);

const RootNavigator = createAppContainer(MainNavigator)
const store = createStore(rootReducer, applyMiddleware(thunk));

//export default RootNavigator

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
     </Provider>
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
