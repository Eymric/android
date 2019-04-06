import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, TextInput, Dimensions, Button } from 'react-native';
import firebase from 'firebase';
import * as firebaseAPI from '../modules/firebaseAPI';

const {width: WIDTH } = Dimensions.get('window')

  var config = { 
    apiKey: "AIzaSyB2LKqCGbrIVbqX_2xo5Jw2cl5xg8AAcHY",
    authDomain: "brasbrascar-fb1c7.firebaseapp.com",
    databaseURL: "https://brasbrascar-fb1c7.firebaseio.com",
    projectId: "brasbrascar-fb1c7",
    storageBucket: "brasbrascar-fb1c7.appspot.com",
    messagingSenderId: "751862023145"
  };

  firebase.initializeApp(config);

export default class RegistrationScreen extends Component {
  static navigationOptions = {
    title : 'Inscription',
  };

  state = { username: '', email: '', password: '', errorMessage: null };

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

  loginRedirection(navigation){
    navigation.navigate('Login');
  }

  inscription() {
    firebaseAPI.createUser(this.state.email, this.state.password, this.state.username )
  }

  render() {
  /*  let logo = {
      uri: 'https://image.noelshack.com/fichiers/2019/08/1/1550485662-logo.png'
    }; {<Image source={logo} style={styles.img}/>}  */

    return (
      <View style = {styles.inputContainer}>
        

        <TextInput 
            style= {styles.input} 
            placeholder={'Nom d\'utilisateur'} 
            underlineColorAndroid='transparent' 
            placeholderTextColor = 'dimgrey' 
            onChangeText={(text) => this.setState({username : text})}
            value={this.state.username} 
        />

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
            onPress={() => this.inscription()}
            title= "Inscription"
            color="#99e265"
        /> 

        <Button style={styles.buttton}
            onPress={() => this.loginRedirection(this.props.navigation)}
            title= "Vous avez un compte? Connectez-vous."
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
    height: 500,
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
