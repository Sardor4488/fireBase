import  firebase  from 'firebase/app';
import "firebase/auth"

const config = firebase.initializeApp({
    apiKey: "AIzaSyAcUurzyGxU0Pa3YBouJ4Sr5tL_VljflzM",
    authDomain: "base-sertificate.firebaseapp.com",
    projectId: "base-sertificate",
    storageBucket: "base-sertificate.appspot.com",
    messagingSenderId: "203212872918",
    appId: "1:203212872918:web:3871145398d2faa2bebd77",
    measurementId: "G-QS6P7W28NV"
});
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;
