import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";


export const firebaseConfigInitializeApp = () => {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
};

//============================= Google Sign in method start now =====================
export const googleHandler = () => {
     const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result, result.credential, result.credential.accessToken, result.user );
        const {displayName, email, photoURL} = result.user;
            const userInfo = {
              isSignIn: true,
              name:displayName,
              email:email,
              photo:photoURL,
              error: '',
              success:true
            }
            return userInfo;
      })
      .catch((err) => {
        console.log(err, err.message, err.code, err.email, err.credential);
      });
}



//====================================== Google Sign out method start now =========================
 export const googleSignOutHandler = () => {
    return firebase.auth().signOut()
    .then(() => {
       console.log('sign out success');
       const signOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
      }
    return signOutUser;
     }).catch((error) => {
       console.log('sign out not success');
     });
 }
  