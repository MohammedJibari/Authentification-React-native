import React, { Component } from 'react';
import { StyleSheet,Dimensions,KeyboardAvoidingView, Text, View, Button, TextInput, Image, ScrollView, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Modal, { ModalContent } from 'react-native-modals';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as Constants from './constantes';
import * as Functions from './functions';
import {Login_Styles} from './styles';
import Inscription from './Inscription';
import Home from './Home';
import ProgressLoader from 'rn-progress-loader';





 class Login extends React.Component {
    
    constructor(props) {
      super(props);

      this.state = {
        email: null,
        password: null,
        userProfil: null,
      }
    }




  render() {  

  return (

    <ImageBackground source={require('./assets/background_center.jpg')} style={Login_Styles.screen}>

        <View style={Login_Styles.containerLogo}>
            <Image source={require('./assets/user.png')} style={Login_Styles.logo}/>
        </View>
        
        <View style={Login_Styles.containerToLogin}>

            <View style={Login_Styles.divLogin} >

                <Text style={Login_Styles.titreLogin}> Connecter</Text>

                <View style={Login_Styles.firstInput}>
                  <Icon name='user'
                        size={15}
                        color='#ab053f'
                        style={{paddingBottom: '2%'}} />
                  <TextInput 
                    placeholder='Entrer votre email' 
                    style={Login_Styles.inputLogin}
                    onChangeText={text => this.setState({email: text})} />
                </View>
            
                <View style={Login_Styles.secondInput} >
                  <Icon name='lock'
                        size={15}
                        color='#ab053f'
                        style={{paddingBottom: '2%'}}/>
                  <TextInput 
                    placeholder='Entrer votre mot de passe' 
                    onChangeText={text => this.setState({password: text})}
                    secureTextEntry={true}
                    style={Login_Styles.inputKey} />
                </View>
             
                <TouchableOpacity style={Login_Styles.btn} onPress={async ()=> {
                   Functions.Auth_values.email = this.state.email;
                   Functions.Auth_values.password = this.state.password;
                   //{Functions.connexion(Functions.Auth_values)}
                   const con = await Functions.connexion(Functions.Auth_values);
                   if(con){
                     this.props.navigation.push('ToHome');
                   }else{
                     alert("email ou mot de passe est incorrect!")
                   } }

                }>
                <Text style={Login_Styles.btnConnecter}>Connection</Text>
                </TouchableOpacity> 

                <ScrollView  contentContainerStyle={Login_Styles.btnDemandeAcces} >
                <Text  onPress={() =>  this.props.navigation.push('ToInscription')}
                       style={Login_Styles.demandeAcces}>Inscription ?
                </Text>
                </ScrollView>
            
            </View>

        </View>
        
    </ImageBackground>
    
 
  );
};
}




export const navigationToPageHome = createStackNavigator({
Home: { screen: Login, 
  navigationOptions: {
      headerShown: false,
    },
  },
ToHome: { screen: Home, 
  navigationOptions: {
    headerShown: false,
  },
},
ToInscription: { screen: Inscription, 
  navigationOptions: {
    headerShown: false,
  },
},
});
export default createAppContainer(navigationToPageHome);