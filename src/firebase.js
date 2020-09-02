import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_XBISkVOJGLoRtDD6HsqmJ-VxS2Ul1Kg',
  authDomain: 'znshop-a72ee.firebaseapp.com',
  databaseURL: 'https://znshop-a72ee.firebaseio.com',
  projectId: 'znshop-a72ee',
  storageBucket: 'znshop-a72ee.appspot.com',
  messagingSenderId: '358386541424',
  appId: '1:358386541424:web:0c791f7d60b5b25a92a5b5',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = auth.firestore();
  }
  logIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  logOut() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      showNAme: name,
    });
  }
}

export default new Firebase();
