import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyBAKUpDD_kGyJEtx6mZ1f04Fcn-P9Tt8C4",
    authDomain: "m-city-ddf3f.firebaseapp.com",
    databaseURL: "https://m-city-ddf3f.firebaseio.com",
    projectId: "m-city-ddf3f",
    storageBucket: "m-city-ddf3f.appspot.com",
    messagingSenderId: "229355584756",
    appId: "1:229355584756:web:09596b7e5fcbb969"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches');


export {
    firebase,
    firebaseMatches
}




// firebaseDB.ref('matches').once('value').then((snapshot) => {
//     console.log(snapshot.val())
// })