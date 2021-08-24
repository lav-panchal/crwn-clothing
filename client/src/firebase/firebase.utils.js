import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXTDyzkgtwvdhNVcYgPN2b6rfyd9jcDVM",
  authDomain: "react-crwn-clothing-22ab8.firebaseapp.com",
  projectId: "react-crwn-clothing-22ab8",
  storageBucket: "react-crwn-clothing-22ab8.appspot.com",
  messagingSenderId: "759320356190",
  appId: "1:759320356190:web:68b888094e201e92569bcf",
};

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (error) {
      console.log("Error at storing Data ", error.message);
    }
  }
  return userRef;
};

// this function is used once in this project for
//  adding shopdata into Firebase

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToadd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToadd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
// ----------

export const convertCollectionsSnapshotToMap = (collections) => {
  const trasformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return trasformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
