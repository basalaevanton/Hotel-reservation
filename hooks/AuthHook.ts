import { useState, useEffect,  } from 'react';
import {
  getAuth,
 
  onAuthStateChanged,
} from 'firebase/auth';


export function useAuthListener() {
  
  const [user, setUser] = useState<RootObject | undefined>();



  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        localStorage.setItem('authUser', JSON.stringify(user));

        // в стате из localStorage
        setUser(JSON.parse(localStorage.getItem('authUser')!));

        // const userInfo = await getDoc(doc(db, 'users', uid));

        // setUser(userInfo.data());

        // в редакс user info по  user.id
        // костыль чтоб засунуть данные из базы в редакс... релоад каждый раз
        // if (userInfo.exists()) {
        //   getUser(userInfo.data());
        // }
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

// export interface UserForm {
//   name: string;
//   lastname: string;
//   gender: string;
//   birthday: Date;
//   email: string;
//   password: string;
//   subscription: boolean;
//   dateRegistration: Date;
// }
