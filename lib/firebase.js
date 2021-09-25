// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCbwqDGRmXR3DLsTOdWlll-rfVbPzYlXD0',
  authDomain: 'hotel-reservation-15c26.firebaseapp.com',
  projectId: 'hotel-reservation-15c26',
  storageBucket: 'hotel-reservation-15c26.appspot.com',
  messagingSenderId: '453444968551',
  appId: '1:453444968551:web:a6c776aea56e2e074cf4c2',
});


// Initialize Firebase

const db = getFirestore();
export default db;
