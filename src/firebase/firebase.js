import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDJ3WJSDsEkPZ0jyM84PfEqOHDrvN_tMw8",
  authDomain: "expensify-9de38.firebaseapp.com",
  databaseURL: "https://expensify-9de38.firebaseio.com",
  projectId: "expensify-9de38",
  storageBucket: "expensify-9de38.appspot.com",
  messagingSenderId: "130744941575"
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };