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

db.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

db.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

db.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


// db.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

// });