import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as UserFirebase,
  NextOrObserver
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { Category } from '../../store/categories/categoriesSlice';
import { User } from '../../store/user/userSlice';

const firebaseConfig = {
  apiKey: 'AIzaSyAM1_X7HGd9skEZclFgitLNlSpq3IfR1xE',
  authDomain: 'crwn-clothing-db-7bd27.firebaseapp.com',
  projectId: 'crwn-clothing-db-7bd27',
  storageBucket: 'crwn-clothing-db-7bd27.appspot.com',
  messagingSenderId: '525859999027',
  appId: '1:525859999027:web:9716c6fc1e1d111f2f4246',
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

const db = getFirestore();

export type ObjectToAdd = {
  title: string
}
export const addCollectionAndDocuments = async <T extends ObjectToAdd> (
  collectionKey: string,
  objectsToAdd: T[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCollectionsAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};

export const createUserDocumentFromAuth = async (
  userAuth: UserFirebase,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (e: any) {
      if (e.code === 'auth/email-already-in-use') {
        alert('cannot create user: user with this email is already registered');
      } else {
        console.log('error creating a user:', e.message);
      }
    }
  }
  return userSnapshot as QueryDocumentSnapshot<User>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<UserFirebase>) =>
  onAuthStateChanged(auth, callback);

export const signInWithEmailAndPasswordFirebase = (email: string, password: string) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
