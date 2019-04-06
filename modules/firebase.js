import firebase from 'firebase';

const config={ 
    apiKey: "AIzaSyB2LKqCGbrIVbqX_2xo5Jw2cl5xg8AAcHY",
    authDomain: "brasbrascar-fb1c7.firebaseapp.com",
    databaseURL: "https://brasbrascar-fb1c7.firebaseio.com",
    projectId: "brasbrascar-fb1c7",
    storageBucket: "brasbrascar-fb1c7.appspot.com",
    messagingSenderId: "751862023145"
};

const Firebase = firebase.initializeApp(config);
export default Firebase;