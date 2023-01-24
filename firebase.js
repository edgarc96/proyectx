import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT5JkL640BVj_CEXNVTf2i4KhCKDUqkYM",
  authDomain: "proyectx-87d79.firebaseapp.com",
  projectId: "proyectx-87d79",
  storageBucket: "proyectx-87d79.appspot.com",
  messagingSenderId: "933632080495",
  appId: "1:933632080495:web:7d7967dfe9ff244d3a2b9a",
  measurementId: "G-KJWVXH2PQ1",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
