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