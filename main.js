// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeORzZJ3dr58dxIVVSYXUXpudwKmPbSCI",
  authDomain: "melindak-idopontfoglalas.firebaseapp.com",
  databaseURL: "https://melindak-idopontfoglalas-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "melindak-idopontfoglalas",
  storageBucket: "melindak-idopontfoglalas.appspot.com",
  messagingSenderId: "549707401190",
  appId: "1:549707401190:web:be09a6259c869ec248f827",
  measurementId: "G-03ZQQY34JD",
  databaseURL: "https://DATABASE_NAME.REGION.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service

// weblapon form --> submitra meghivni a lenti fgv-t
// timestamphez date time picker kell majd
const database = getDatabase(app);
function writeTimetable(Id, name, email, timestamp) {
  
  set(ref(database, 'idopontok/' + Id), {
    nev: name,
    email: email,
    ido : timestamp
  });
}

const idopontokRef = ref(database, 'idopontok/' + Id);
onValue(idopontokRef, (snapshot) => {
  const data = snapshot.val();
  updateidopontok(postElement, data);
});