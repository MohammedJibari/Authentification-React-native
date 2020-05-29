import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Inscription from './Inscription';
import {AsyncStorage} from 'react-native';




//constants var
//===== get api ========
export const api_auth = 'https://medjibari.sigl.website/apptest/index.php';
export const api_inscrip = 'https://medjibari.sigl.website/apptest/user.php';
//===== data user object saved ========== 
export const user_auth = {
  email : null,
  password : null,
  token : null,
  status : false,
};





// navigation to pages
export const navigationToPageLogin = createStackNavigator({
    Home: { screen: Login, 
    navigationOptions: {
      header: null,
    },
  },
});
export const ToLogin = createAppContainer(navigationToPageLogin);


export const navigationToPageHome = createStackNavigator({
    Home: { screen: Home, 
    navigationOptions: {
      headerShown: false,
    },
  },
});
export const ToHome = createAppContainer(navigationToPageHome);



export const navigationToPageInscription = createStackNavigator({
  Home: { screen: Inscription, 
  navigationOptions: {
    headerShown: false,
  },
},
});
export const ToInscription = createAppContainer(navigationToPageInscription);


