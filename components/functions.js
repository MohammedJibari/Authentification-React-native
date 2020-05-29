import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import {AsyncStorage} from 'react-native';
import  * as Constants from './constantes';
import Home from './Home';
import Login from './Login';





//======tableau des donnees d'authentification=========
export let Auth_values = {
  email : null,
  password : null
}

export let Auth_values_inscription = {
  nom : null,
  prenom : null,
  email : null,
  telephone : null,
  password : null
}

export let Auth_values_profil = {
  token : null,
}



export const encodeDataToURL = (data) => {
  return Object
    .keys(data)
    .map(value => `${value}=${encodeURIComponent(data[value])}`)
    .join('&');
}



export const getAPI = (Api, Params, Method="POST") =>
{
  return fetch( Api, {
    method: Method,
    headers: {
      Accept : 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeDataToURL(Params)
  })

  
}


export const isLoger = async (Params) =>
{
      let ResponseData = await getAPI(Constants.api_auth, Params);
      if (ResponseData.status == '200')
          {
            const rsl = await ResponseData.json();
                if(rsl.status == true)
                {
                  AsyncStorage.setItem('utilisateur', JSON.stringify(rsl.info));
                  Constants.user_auth.email = Auth_values.email ;
                  Constants.user_auth.password = Auth_values.password ; 
                  Constants.user_auth.token = rsl.info[0].token;
                  Constants.user_auth.statu = true ;
                  AsyncStorage.setItem('@userTest', JSON.stringify(Constants.user_auth));
                  return true;
                }
                else return false;
          }
          else return false;
}



export const connexion = async (Params) => {
  let loger = await isLoger(Params);
    if(loger) return true;
    else return false;
}



//inscription
export const isSignin = async (Params) =>
{
      let ResponseDataSignin = await getAPI(Constants.api_inscrip, Params);
          if (ResponseDataSignin.status == '200')
          {
            const rslSignin = await ResponseDataSignin.json();
                if(rslSignin.status == true)
                {
                  AsyncStorage.setItem('utilisateur', JSON.stringify(rslSignin.result));
                  var dataUser = rslSignin.result;
                  Auth_values.email = dataUser[0].email;
                  Auth_values.password = dataUser[0].password;
                  {connexion(Auth_values)}                  
                  return true;
                }
                else return false;
          }
          else return false;
}


export const inscrire = async (Params) => {
  let sign = await isSignin(Params);
    if(sign) return true;
    else return false;
}




//validation d'email
export const validateEmail = (email) => {
  var regExp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp_email.test(email);
};

//validation telephone
export const validateTel = (tel) => {
  let telephone = tel.replace(/\./g , '').replace(/\-/g,'').replace(/\s/g,'');
  var regExp_tel = /^\+?[0-9]{3,}$/g;
  return regExp_tel.test(telephone);
};

//validation password
export const validatePassword = (password) => {
  if(password == null || password.length < 6){
    alert("le mot de passe doit contenir au moins 6 caracteres!");
    return false
  } 
  else return true
};

//validation isVide
export const validationIsVide = (nom, prenom, email, tel, password) => {
  
  if(nom == null || prenom == null || email == null || tel == null || password == null)
  {
    if (nom == null) 
    {
      alert("le champs nom est vide!");
    }
    else if (prenom == null) 
    {
      alert("le champs prenom est vide!");
    }
    else if (email == null) 
    {
      alert("le champs email est vide!");
    }
    else if (tel == null) 
    {
      alert("le champs telephone est vide!");
    }
    else if (password == null) 
    {
      alert("le champs mot de passe est vide!");
    }
    return false;
  }  
  else return true;
}


//validation du formulaire complet
export const validationFormulaire = (nom,prenom,email,tel,password,RepeatPassword) => {
  
  if(!validationIsVide(nom,prenom,email,tel,password)) return false
  else 
  {
    if(password != RepeatPassword) 
    {
      alert("les mots de passe ne sont pas semblable!");
      return false
    }
    else {
      if (validateEmail(email) && validateTel(tel) && validatePassword(password)) return true
      else {
        if(!validateEmail(email)) 
        {
          alert("format d'email est incorrect! 'nom@example.com' ");
          return false
        }
        else if(!validateTel(tel))
        {
          alert("format telephone est incorrect! ");
          return false
        } 
        
      } 
    }
    
  }

}

   