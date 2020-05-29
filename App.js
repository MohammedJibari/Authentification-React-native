import React, {Component} from 'react';
import { Switch, Text, View, StyleSheet, ImageBackground, TextInput, Image, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {AsyncStorage} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import * as Constants from './components/constantes';
import * as Functions from './components/functions';
import Inscription from './components/Inscription';
 




export default class App extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
       returnData: null,
     }
    }


    async componentDidMount() {
      const returnData = await AsyncStorage.getItem("@userTest"); 
      this.setState({returnData});
    }


    render() {
      if (this.state.returnData == null) 
      {
        return <Constants.ToLogin />
      }
      else
      {
        const DataUser = JSON.parse(this.state.returnData);
        if(DataUser.statu == true)
        {
          Functions.Auth_values.email = DataUser.login;
          Functions.Auth_values.password = DataUser.password;          
          const con = Functions.connexion(Functions.Auth_values);
          if(con) return <Constants.ToHome />
          else return <Constants.ToLogin />
        }
        else
          return <Constants.ToLogin />
      }

      return <App />
 
    }
}
  

