import * as React from 'react';
import { Switch, Text, View, StyleSheet, ImageBackground, TextInput, Image, Button, TouchableOpacity} from 'react-native';
import {AsyncStorage} from 'react-native';
import {Home_Styles} from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login';


export default class Home extends React.Component {
  state = {
    navigate: false,
    nomU: null,
    prenomU : null,
    emailU : null,
    telU : null,
 }


  async componentDidMount() {
    const returnData = await AsyncStorage.getItem("utilisateur"); 
    var user = JSON.parse(returnData);
    this.setState({nomU : user[0].nom})
    this.setState({prenomU : user[0].prenom})
    this.setState({emailU : user[0].email})
    this.setState({telU : user[0].telephone})
  }



  navigation = () =>
  {
    this.setState({navigate: true});
  }

     
  render() {
    if(this.state.navigate) return <Login />
    return (

      <View style={Home_Styles.screen}>
        
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'transparent']}
          style={Home_Styles.gradient}
        />

        <View style={Home_Styles.viewTop}>
          <View style={Home_Styles.viewBack}>
            <Image source={require('./assets/back.png')} style={Home_Styles.back}/>
          <Text style={Home_Styles.textBack}>Profile</Text>
          </View>
          <View style={Home_Styles.viewEdit}>
            <TouchableOpacity onPress={this.navigation}>
            <Image source={require('./assets/logout.png')} style={Home_Styles.logout}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Home_Styles.divImageProfile}>
            <Image source={require('./assets/profile.jpg')} style={Home_Styles.imageProfile}/>
        </View>

        <View style={Home_Styles.divContainer}>

        </View>

            <View style={Home_Styles.viewNom}>
              <Text style={Home_Styles.textNom}>Nom :</Text>
              <TouchableOpacity style={Home_Styles.viewRecu}>
                <Text>
                    {this.state.nomU}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={Home_Styles.viewPrenom}>
              <Text style={Home_Styles.textNom}>Prenom :</Text>
              <TouchableOpacity style={Home_Styles.viewRecu}>
                <Text>
                    {this.state.prenomU}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={Home_Styles.viewEmail}>
              <Text style={Home_Styles.textNom}>Email :</Text>
              <TouchableOpacity style={Home_Styles.viewRecu}>
                <Text>
                    {this.state.emailU}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={Home_Styles.viewTel}>
              <Text style={Home_Styles.textNom}>Tel :</Text>
              <TouchableOpacity style={Home_Styles.viewRecu}>
                <Text>
                    {this.state.telU}
                </Text>
              </TouchableOpacity>
            </View>        
          
      </View>
    );  
  } 
}


