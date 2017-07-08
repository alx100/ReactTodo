import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBr7A0CNPhDuktIypGoQw9ixrdRX_porI8",
    authDomain: "alx-todo-app.firebaseapp.com",
    databaseURL: "https://alx-todo-app.firebaseio.com",
    projectId: "alx-todo-app",
    storageBucket: "alx-todo-app.appspot.com",
    messagingSenderId: "857111677643"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0' 
    },
    isRunning: true,
    user: {
        name: 'Alex',
        age: 36
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 2'
});

