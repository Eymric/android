import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
const AuthStack = createStackNavigator({ Inscription: RegistrationScreen });

export default createAppContainer(createSwitchNavigator(
{
	Main: MainTabNavigator,
	Auth: AuthStack,
	AuthLoading: AuthLoadingScreen,
	Login:LoginScreen,
},
{
	initialRouteName: 'AuthLoading'
}));