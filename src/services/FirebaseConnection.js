import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "***************************",
  authDomain: "fluxo-d2776.firebaseapp.com",
  databaseURL: "https://fluxo-d2776.firebaseio.com",
  projectId: "fluxo-d2776",
  storageBucket: "",
  messagingSenderId: "401726099882",
  appId: "1:401726099882:web:513cdacfb8211f60"
};

firebase.initializeApp(firebaseConfig);

export default firebase;