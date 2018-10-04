import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcUNtFQSi2lJlbJg4UqEDyALtB4-5GicA",
    authDomain: "fomowebplatform.firebaseapp.com",
    databaseURL: "https://fomowebplatform.firebaseio.com",
    projectId: "fomowebplatform",
    storageBucket: "fomowebplatform.appspot.com",
    messagingSenderId: "941951167453"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true })

  export default firebase; 