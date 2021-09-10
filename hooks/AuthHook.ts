import { useState, useEffect, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export function useAuthListener() {
  const [user, setUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        localStorage.setItem('authUser', JSON.stringify(user));
        setUser(JSON.parse(localStorage.getItem('authUser')!));
      } else {
        localStorage.removeItem('authUser');
      }
    });
  }, []);

  return user;
}

export interface ProviderData {
  providerId: string;
  uid: string;
  
  displayName?: any;
  email: string;
  phoneNumber?: any;
  photoURL?: any;
}

export interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface RootObject {
  uid?: string;
  email?: string;
  emailVerified?: boolean;
  isAnonymous?: boolean;
  providerData?: ProviderData[];
  stsTokenManager?: StsTokenManager;
  createdAt?: string;
  lastLoginAt?: string;
  apiKey?: string;
  appName?: string;
}
