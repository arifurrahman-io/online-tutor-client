import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = { user, createUser, verifyEmail, providerLogin, updateUserProfile, signIn, logOut }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider;

