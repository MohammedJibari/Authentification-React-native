import * as React from 'react';
import { Switch, Text, View, StyleSheet, ImageBackground, TextInput, Image, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SCLAlert, SCLAlertButton, titleStyle} from 'react-native-scl-alert'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';
import {Demande_Styles} from './styles';
import * as Functions from './functions'
import Login from './Login';
import Home from './Home';




class Inscription extends React.Component {
constructor(props) {
      super(props);
            
      this.state = {
            nom: null,
            prenom: null,
            email: null,
            telephone: null,
            password: null,
            RepeatPassword:null,
            navigate : false
      }
}



navigation = () =>
{
      this.setState({navigate: true});
}
  

  //interface
  render() {

      if(this.state.navigate) return <Login />

    return (

      <View style={Demande_Styles.screen}>

            

            <ImageBackground
                style={Demande_Styles.containerImageScreen}
                imageStyle={Demande_Styles.image_background}> 
          
            <Text style={Demande_Styles.titleIncription}>Inscription!</Text>

                <View style={Demande_Styles.containerDemandeAcces}>
                    <ScrollView style={Demande_Styles.divDemandeAcces} >
                        <View style={Demande_Styles.secondInput}>
                            <Icon name='user'
                                  size={15}
                                  color='#ab053f'
                                  style={{paddingBottom: '2%'}}/>
                            <TextInput 
                              placeholder='le nom' 
                              placeholderTextColor = "#A9A9A9"
                              style={Demande_Styles.inputEmail} 
                              onChangeText={text => this.setState({nom: text})}
                              />
                        </View>
                      
                        <View style={Demande_Styles.secondInput} >

                            <Icon name='user'
                                  size={15}
                                  color='#ab053f'
                                  style={{paddingBottom: '2%'}} />
                            <TextInput 
                                  placeholder='le prenom' 
                                  placeholderTextColor = "#A9A9A9"
                                  style={Demande_Styles.inputEmail} 
                                  onChangeText={text => this.setState({prenom: text})}/>
                        </View>

                        <View style={Demande_Styles.otherInput} >

                            <Icon name='envelope'
                                  size={15}
                                  color='#ab053f'
                                  style={{paddingBottom: '2%'}} />
                            <TextInput 
                                  placeholder='adresse email' 
                                  placeholderTextColor = "#A9A9A9"
                                  style={Demande_Styles.inputEmail}
                                  onChangeText={text => this.setState({email: text})} />
                        </View>

                        <View style={Demande_Styles.otherInput} >

                            <Icon name='phone'
                                  size={15}
                                  color='#ab053f'
                                  style={{paddingBottom: '2%'}} />
                            <TextInput 
                                  placeholder='numero de telephone'
                                  placeholderTextColor = "#A9A9A9" 
                                  style={Demande_Styles.inputEmail} 
                                  onChangeText={text => this.setState({telephone: text})}/>
                        </View>

                        <View style={Demande_Styles.otherInput} >

                            <Icon name='lock'
                                  size={15}
                                  color='#ab053f'
                                  style={{paddingBottom: '2%'}} />
                            <TextInput 
                                  placeholder='le mot de passe' 
                                  placeholderTextColor = "#A9A9A9"
                                  secureTextEntry={true}
                                  style={Demande_Styles.inputEmail} 
                                  onChangeText={text => this.setState({password: text})}/>
                        </View>

                        <View style={Demande_Styles.otherInput} >

                            <Icon name='lock'
                                  size={15}
                                  color='#ab053f'
                                  style={{paddingBottom: '2%'}} />
                            <TextInput 
                                  placeholder='repeter le mot de passe'
                                  placeholderTextColor = "#A9A9A9"
                                  secureTextEntry={true} 
                                  style={Demande_Styles.inputEmail} 
                                  onChangeText={text => this.setState({RepeatPassword: text})}/>
                        </View>

                  
                        <View style={Demande_Styles.viewEnvoieDemande}>
                            <TouchableOpacity onPress={this.navigation}>
                              <Image source={require('./assets/back.png')} 
                                style={Demande_Styles.backToLogin} />
                            </TouchableOpacity>

                            <View style={Demande_Styles.viewswitch} >
                              <TouchableOpacity onPress = { async() => {
                                    if (!Functions.validationFormulaire(this.state.nom, this.state.prenom, this.state.email, this.state.telephone, this.state.password, this.state.RepeatPassword)) {
                                      return false
                                    } else {
                                      Functions.Auth_values_inscription.nom = this.state.nom;
                                      Functions.Auth_values_inscription.prenom = this.state.prenom;
                                      Functions.Auth_values_inscription.email = this.state.email;
                                      Functions.Auth_values_inscription.telephone = this.state.telephone;
                                      Functions.Auth_values_inscription.password = this.state.password;
                                      const con = await Functions.inscrire(Functions.Auth_values_inscription);
                                      if(con){
                                          this.props.navigation.push('ToHome');
                                        }
                                      
                                    }}} >
                              <Image source={require('./assets/signin.png')} style={Demande_Styles.logoInscription}/>
                              </TouchableOpacity>
                              </View>
                        </View>

                    </ScrollView>
                </View>
            </ImageBackground>


      </View>
    );  
  } 
}




export const navigationToPageHome = createStackNavigator({
      Home: { screen: Inscription, 
        navigationOptions: {
            headerShown: false,
          },
        },
      ToHome: { screen: Home, 
        navigationOptions: {
          headerShown: false,
        },
      },
      });
export default createAppContainer(navigationToPageHome);