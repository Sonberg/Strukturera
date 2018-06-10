import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAkd6XAiGd1v8t4YtVugEkYEpJPqVYbGRQ",
    authDomain: "stukturera.firebaseapp.com",
    databaseURL: "https://stukturera.firebaseio.com",
    projectId: "stukturera",
    storageBucket: "",
    messagingSenderId: "66178745346"
  };

  firebase.initializeApp(config);

  var db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

export const projectsRef = db.collection('projects');
export const storiesRef = db.collection('stories');
export const stepsRef = db.collection('steps');
export const tagsRef = db.collection('tags');

