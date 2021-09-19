// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { doc, getDoc } from 'firebase/firestore';
import db from '../lib/firebase';
import { UserForm } from '../interfaces/UserFormDB.intrerface';

export function UserInfo(): UserForm {
  const [userInfo, setUserInfo] = useState<UserForm>();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        const data = await getDoc(doc(db, 'users', uid));
        const dataUser = data.data();
        if (dataUser) {
          setUserInfo(dataUser);
        }
      }
    });
  }, []);

  return userInfo;
}
