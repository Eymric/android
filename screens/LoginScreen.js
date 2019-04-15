import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, TextInput, Dimensions, Button } from 'react-native';
import firebase from 'firebase';
import * as firebaseAPI from '../modules/firebaseAPI';
import RegistrationScreen from '../screens/RegistrationScreen';
import { StackNavigator } from 'react-navigation';

const {width: WIDTH } = Dimensions.get('window')

export default class LoginScreen extends Component {
  static navigationOptions = {
    title : 'Login',
  };

  state = { email: '', password: '', errorMessage: null };

  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }
  
  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStateChanged:', user)

      if (user) {
        navigation.navigate('Main');
      }
    });
  }

  registerRedirection(navigation){
    navigation.navigate('Inscription');
  }

  goAdd(navigation){
    navigation.navigate('AddTrajet');
  }


  login() {
    firebaseAPI.connexion(this.state.email, this.state.password )
  }

  render() {
    let logo = {
      uri: 'https://image.noelshack.com/fichiers/2019/08/1/1550485662-logo.png'
    };

    return (
       <View style = {styles.inputContainer}>

       
        {<Image source={logo} style={styles.img}/>}

    
        <TextInput 
            style= {styles.input} 
            placeholder={'Adresse mail'} 
            underlineColorAndroid='transparent' 
            placeholderTextColor = 'dimgrey' 
            onChangeText={(text) => this.setState({email : text})}
            value={this.state.email} 
        />  
        

       
        <TextInput 
            style= {styles.input} 
            placeholder={'Mot de passe'} 
            underlineColorAndroid='transparent' 
            placeholderTextColor = 'dimgrey'
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password : text})}
            value={this.state.password} 
        />
        

        <Button style={styles.buttton}
            onPress={() => this.login()}
            title= "Connexion"
            color="#99e265"
        /> 

         <Button style={styles.buttton}
            onPress={() => this.registerRedirection(this.props.navigation)}
            title= "Inscription"
            color="#99e265"
        />
        
        <Button style={styles.button}
        onPress={() => this.goAdd(this.props.navigation)}
          title="professionel"
          color="#99e265"
        />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10
  },
  button: {
    marginTop: 40,
    borderRadius: 20,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 300,
  },
  input: { 
    alignItems: 'stretch',
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
    backgroundColor: 'whitesmoke',
    color: 'dimgrey',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: { 
    color: 'red',
  },
});
