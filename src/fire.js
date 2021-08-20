import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAIlgZ3mnDHaKgFKark0M_z2QTW46mozEM",
    authDomain: "authentication-check-a24c1.firebaseapp.com",
    projectId: "authentication-check-a24c1",
    storageBucket: "authentication-check-a24c1.appspot.com",
    messagingSenderId: "213504187851",
    appId: "1:213504187851:web:efaaa3b871b3eb1cfdaa4e"
  };
const fire=firebase.initializeApp(firebaseConfig);
export default fire;