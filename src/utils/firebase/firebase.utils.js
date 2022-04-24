import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBc5MoNRH13y0xLGVGzTsUVOGyFwCZW1No",
    authDomain: "crwn-clothing-db-3766f.firebaseapp.com",
    projectId: "crwn-clothing-db-3766f",
    storageBucket: "crwn-clothing-db-3766f.appspot.com",
    messagingSenderId: "109075810969",
    appId: "1:109075810969:web:63454f32fd9a2d05428608"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:"select_account"
  });

  export const auth= getAuth()
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

  export const db=getFirestore();

  export const createUserDocumentFromAuth= async (userAuth)=>{
      const userDocRef = doc(db,'users',userAuth.uid);

      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot.exists());
  }