import firebase from 'firebase';

try {
   var config = {
    apiKey: "AIzaSyBr7A0CNPhDuktIypGoQw9ixrdRX_porI8",
    authDomain: "alx-todo-app.firebaseapp.com",
    databaseURL: "https://alx-todo-app.firebaseio.com",
    projectId: "alx-todo-app",
    storageBucket: "alx-todo-app.appspot.com",
    messagingSenderId: "857111677643"
};
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
