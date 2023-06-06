//import firebase from 'firebase/app'
///import 'firebase/firestore'
//import 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import { getFirestore }  from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAx2EeRWcXYGNtaJzyW_pi_cd3yaRxNRgM",
    authDomain: "todo-2ed27.firebaseapp.com",
    projectId: "todo-2ed27",
    storageBucket: "todo-2ed27.appspot.com",
    messagingSenderId: "554415921294",
    appId: "1:554415921294:web:4f3bc8b80f420e675111df"
  };

  /* firebaseConfig.initializeApp(firebaseConfig);
  firebaseConfig.firestore();
  export default firebase; */
const app = initializeApp(firebaseConfig);
//export const db= getFirestore(app);
export const auth = getAuth(app);
//const storage=firebase.storage();
export default app;
