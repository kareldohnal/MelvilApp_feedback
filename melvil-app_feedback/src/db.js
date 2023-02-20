import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBxGUPhHArOXaCL40gh_aVsCD8jsTy2lIM',
  authDomain: 'aplikace-melvil-feedback.firebaseapp.com',
  databaseURL: 'https://aplikace-melvil-feedback-default-rtdb.firebaseio.com',
  projectId: 'aplikace-melvil-feedback',
  storageBucket: 'aplikace-melvil-feedback.appspot.com',
  messagingSenderId: '619950830528',
  appId: '1:619950830528:web:89ea781ca7338b63c54e25',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

