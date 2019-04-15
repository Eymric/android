import * as firebase from 'firebase'

export const createUser = (email, password, username) => {
	firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(data => {
		firebase.database().ref('users/' + data.user.uid).set({
		username: username,
		email: email
	});
	})
	.catch((error) => console.log('createUser error:', error));
}

export const logout = () => {
	firebase.auth().signOut();
}

export const connexion = (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.catch((error) => console.log('erreur connexion: ', error));
}

export const trajet = () => {
	firebase.database().ref('trajet/' + '002' ).set({
		nb_meubles: 4,
		poids: 65,
		estimation_prix: 30
	  });

	  firebase.database().ref('adresse/' + '001' ).set({
		lieu: '12 rue des roses',
		cp: 75018,
		ville: 'Paris',
		
	  });

	  firebase.database().ref('adresse/' + '002' ).set({
		lieu: '17 Sente des Hauts Jardins',
		cp: 60440,
		ville: 'Nanteuil-le-Haudouin',
		
	  });


}