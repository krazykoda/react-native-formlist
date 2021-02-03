import * as firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8M-PdQcA3rku_AmYLPYl8CmrvEeCW5GI",
    authDomain: "rnformlist.firebaseapp.com",
    projectId: "rnformlist",
    storageBucket: "rnformlist.appspot.com",
    messagingSenderId: "764639139397",
    appId: "1:764639139397:web:a08a429194411d1ce8752c"
};

firebase.initializeApp(firebaseConfig);


export default firebase;