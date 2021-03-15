import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtOEfjt68BkFs3IIyeQEFpZHDNicHkPoc',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'react-native-frb-613f9',
  storageBucket: 'react-native-frb-613f9.appspot.com',
  messagingSenderId: '351566783214',
  appId: '1:351566783214:android:ef7e1d79c320ee0c1009ff',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };