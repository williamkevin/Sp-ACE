// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // import firebase from "firebase"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAbt9mLzdhbj_U4-FC0WcerGcjGrxj4_b4",
//   authDomain: "designourpicture.firebaseapp.com",
//   projectId: "designourpicture",
//   storageBucket: "designourpicture.appspot.com",
//   messagingSenderId: "267196531755",
//   appId: "1:267196531755:web:56a12edcbdde32f77a566e",
//   measurementId: "G-RWEZTGK5NH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const auth = firebase.auth()

// export default auth



// import firebase from "firebase"
// import auth from "../../fb.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// var provider = new GoogleAuthProvider();

// onClick = {() => {
//     const auth = getAuth();

//       signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//     }}