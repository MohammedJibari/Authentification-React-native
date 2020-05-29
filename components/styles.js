import { StyleSheet } from 'react-native';





//colors
export const blanc = "#fff";
export const noir = "#000";
export const noir_transparent = "rgba(0,0,0,0.5)";
export const noir_transparent_1 = "rgba(0,0,0,0.3)";
export const blanc_transparent = "rgba(255,255,255,0.5)";
export const mauve_claire = "#ab053f";
export const mauve_fonce = "#6f033b";
export const gris_0 = "#eee";
export const gris_1 = "#ccc";
export const gris_2 = "#363636";
export const gris_3 = "#222";




//styles
//==========style login=============
export const Login_Styles = StyleSheet.create({
  
    screen: {
      padding:0,
      flex:1,
      height:'60%',
      alignItems: "center",
    },
    containerToLogin: {
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      height: '50%',    
      alignItems: "center"
    },
    containerLogo: {
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      paddingTop: '50%',
      backgroundColor:'rgba(0, 0, 0, 0.5)',
      flex:1,
      width: '100%',
      height: '200%'
    },
    logo: {
      marginBottom : 40,
      width : 50,
      height : 50

    },
    divLogin: {
      height: '100%',
      backgroundColor: '#fff',
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: '7%',
      borderTopRightRadius: 55,
      borderTopLeftRadius:55,
      alignContent: "center",
      alignItems: "center"
    },
    inputLogin: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginLeft : '-5%',
      marginRight: 4,
      marginBottom: 6,
      paddingLeft: 20,
      paddingBottom: '1%',
      alignItems: "center",
      alignContent: "center",
      width: '100%',
      color: '#363636'
    },
    inputKey: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      marginLeft : '-5%',
      marginRight: 4,
      marginBottom: 6,
      paddingLeft: 20,
      paddingBottom: '1%',
      alignItems: "center",
      alignContent: "center",
      width: '100%'
    },
    btn: {
      top: '10%',
      marginBottom: '5%',
      borderRadius: 20,
      color: '#fff',
      backgroundColor: '#ab053f',
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      width: 250,
     },
     btnConnecter: {
      color: '#fff',
      alignItems: "center",
      alignContent:"center",
      justifyContent: "center",
      marginTop: '2%'
     },
     titreLogin: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: '15%',
      left: '-35%'
     },
     firstInput: {
      marginTop: '2%',
      marginBottom: '1%',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: '2%',
      marginRight: '2%'
     },
     secondInput: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: '2%',
      marginRight: '2%',
      marginTop: '5%',
     },
     btnDemandeAcces:
     {
      alignItems: "center" , 
      bottom : '-60%',
     },
     demandeAcces: {
       fontWeight: "bold",
       color: '#ab053f',
     }
  });
  

//============style inscription============
export const Demande_Styles = StyleSheet.create({

    screen: {
      flexGrow: 1,
      backgroundColor:'#6f033b',
      alignItems: "center" , 
      height: '100%',    
    },
    containerImageScreen: {
      width: '100%',
      height: '100%',
      alignItems: "center",
    },
    image_background: {
      backgroundColor:'#fff'
    },
     containerDemandeAcces: {
      height: '100%',    
      alignItems: "center",
      position: "absolute",
    },
    divDemandeAcces: {
      height: '50%',
      marginTop : '50%',
      backgroundColor: '#6f033b',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: '10%',
      borderTopRightRadius : 40,
      borderTopLeftRadius: 40
    },
    inputName: {
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
      marginLeft : '-5%',
      marginRight: 4,
      marginBottom: 4,
      paddingLeft: 20,
      paddingBottom: '1%',
      alignItems: "center",
      alignContent: "center",
      width: '100%',
      color: '#fff'
    },
    inputEmail: {
      borderBottomColor: '#ccc',
      borderBottomWidth: 0.5,
      marginLeft : '-5%',
      marginRight: 4,
      marginBottom: 4,
      paddingLeft: 20,
      paddingBottom: '1%',
      alignItems: "center",
      alignContent: "center",
      width: '100%',
      color: '#fff'
    },
     firstInput: {
      marginTop: '6%',
      marginBottom: '1%',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: noir_transparent_1,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 2,
      paddingTop: 6,
      borderRadius: 20,
      color: '#fff'
     },
     secondInput: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: '3%',
      backgroundColor: noir_transparent_1,
      paddingLeft: 15,
      paddingRight: 12,
      paddingBottom: 2,
      paddingTop: 6,
      borderRadius: 20,
      color: '#fff'
     },
     otherInput: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: '4%',
      backgroundColor: noir_transparent_1,
      paddingLeft: 15,
      paddingRight: 12,
      paddingBottom: 2,
      paddingTop: 6,
      borderRadius: 20,
      color: '#fff'
     },
     demandeAcces: {
       fontWeight: "bold",
       color: '#ab053f'
     },
     imageLogo: {
       width: 100,
       height: 152,
       alignItems: "center",
       flex : 1
     },
     viewEnvoieDemande: {
      marginTop: '12%',
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: '4%',
      marginRight: '2%'
     },
     backToLogin: {
      width: 15,
      height: 15,
      color: '#363636',
      marginTop:15,
    },
    viewswitch: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: '2%',
      marginRight: '2%',
    },
    textswitch: {
      color: '#fff',
      marginTop: '8%',
      marginRight: '2%',
      fontSize: 11,
      fontWeight: "bold"
    },
    viewalert: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    alert: {
      paddingLeft: '10%',
      paddingRight: '10%',
      backgroundColor: 'rgba(0,0,0,0.8)'
    },
    btnalertfirst: {
      backgroundColor: '#6f033b'
    },
    btnalertsecond: {
      backgroundColor: '#6f033b'
    },
    logoInscription: {
      width : 40,
      height : 40,
      marginRight : 5,
      marginBottom : 2
    },
    titleIncription : {
      marginTop : 110,
      color : mauve_fonce,
      fontWeight : "bold",
      fontSize : 26,
      left : '-25%',
      
    }
  });




//====== style profil ==========
export const Home_Styles = StyleSheet.create({

  screen: {
    flexGrow: 1,
    backgroundColor:'#690036',
    alignItems: "center" , 
    height: '100%',    
    paddingLeft : '4%',
    paddingRight : '4%',
  },
  divContainer: {
    width : '100%',
    height : "100%",
    marginTop : '60%',
    marginLeft : '15%',
    marginRight : '15%',
    backgroundColor : "rgba(255,255,255,0.85)",
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    position: "absolute"
  },
  gradient : {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },
  back: {
    width : 15,
    height : 15,
    marginTop : 5,
  },
  viewBack: {
    justifyContent : "space-around",
    flexDirection: "row",
    width : "30%",
    marginRight : "50%"
  },
  textBack: {
    color : "#fff",
    fontSize : 18,
  },
  logout: {
    width : 20,
    height : 20,
    marginLeft : "38%",
    marginRight : 20
  },
  viewEdit:{
    width: "10%",
    paddingRight:10
  },
  viewTop: {
    justifyContent : "space-around",
    flexDirection: "row",
    marginTop : 40,
    width : "100%",
  },
  imageProfile: {
    width:100,
    height : 100,
    marginTop: "22%",
    borderRadius : 200,
    zIndex : 9999,
    borderWidth : 1,
    borderColor : "#fff"
  },
  viewNom : {
    marginTop : 30
  },
  viewPrenom : {
    marginTop : 15
  },
  viewEmail : {
    marginTop : 15
  },
  viewTel : {
    marginTop : 15
  },
  viewRecu: {
    height : 50,
    width : 250,
    marginRight : 20,
    marginLeft : 20,
    backgroundColor : "rgba(0,0,0,0.1)",
    paddingTop : 12,
    paddingLeft :12,
    borderRadius : 5
  },
  textNom: {
    fontSize : 16,
    fontWeight : "bold",
    marginLeft : 22,
    marginBottom : 8
  },
  

});