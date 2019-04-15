import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, TextInput, Dimensions, Button } from 'react-native';
import firebase from 'firebase';
import * as firebaseAPI from '../modules/firebaseAPI';

export default class AddTrajetScreen extends Component{

    static navigationOptions = {
        title : 'Ajoutez trajet',
      };

      state = { nb_meubles: null, poids: null, estimation_prix: null,  lieu: '', cp: null, ville: '' };
      
    //   firebase.database().ref('trajet/' + '003' ).set({
	// 	nb_meubles: 40,
	// 	poids: 450,
	// 	estimation_prix: 320
	//   });

	//   firebase.database().ref('trajet').child('003/adresseDepart').set({
	// 	lieu: '18 Allée des ormes',
	// 	cp: 13006,
	// 	ville: 'Marseille',
		
	//   });

	//   firebase.database().ref('trajet').child('003/adresseArrivee').set({
	// 	lieu: '12 Avenue Foch',
	// 	cp: 75016,
	// 	ville: 'Paris',
		
	// 	});


    render(){
        return(
            <View>
                
                <Text>Renseignez vos infos pour trouver un nouveau trajet</Text>
                    
                <TextInput 
                    placeholder={'Adresse'}
                    onChangeText={(text) => this.setState({password : text})}
                    value={this.state.password}
                />

            </View> 
        )
    }

}