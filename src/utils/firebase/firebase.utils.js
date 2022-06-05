import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from 'firebase/firestore';

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

  const googleProvider = new GoogleAuthProvider();
  
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();
  
  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };
  

  export const createUserDocumentFromAuth= async (userAuth,additionalInformation)=>{
      if(!userAuth)return;

      const userDocRef = doc(db,'users',userAuth.uid);

      console.log(userDocRef);

      const userSnapshot = await getDoc(userDocRef);
      console.log(userSnapshot.exists());
      if(!userSnapshot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
    
  
    try{
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation
        });
    }
    catch(error){
    }  
    }
    return userDocRef
  }
 

  export const createAuthUseWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;

 
    return await createUserWithEmailAndPassword(auth, email, password);
  }

    export const signInAuthUseWithEmailAndPassword = async (email, password) =>{
      if(!email || !password) return;
  
  
      return await signInWithEmailAndPassword(auth, email, password);
   
  }

  export const signOutUser = () => signOut(auth);

  export const onAuthStateChangedListener = (callback) =>

    onAuthStateChanged(auth, callback);
 