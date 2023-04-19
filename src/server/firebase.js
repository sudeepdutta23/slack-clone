import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtf-umT8ojc7G62w_dyFGdbgq5Ol0a3k0",
    authDomain: "slcak-clone-3ca0f.firebaseapp.com",
    projectId: "slcak-clone-3ca0f",
    storageBucket: "slcak-clone-3ca0f.appspot.com",
    messagingSenderId: "770241921034",
    appId: "1:770241921034:web:69dbeafd4e2ee2c3a6dff3",
    measurementId: "G-3PWFGT869D"
  };

//   firebase.initializeApp(firebaseConfig);

//   firebase.analytics();

  const app = initializeApp(firebaseConfig)

  const analytics = getAnalytics(app)

  export const auth = getAuth(app)

//   export const fireStore = getFirestore(app)

//   export default firebase;