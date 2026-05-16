import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user profile from localStorage
  function loadProfile(uid) {
    const stored = localStorage.getItem(`profile_${uid}`);
    if (stored) {
      setUserProfile(JSON.parse(stored));
    }
  }

  // Save user profile to localStorage
  function saveProfile(uid, profile) {
    localStorage.setItem(`profile_${uid}`, JSON.stringify(profile));
    setUserProfile(profile);
  }

  // Sign up with email and password
  async function signup(email, password) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  }

  // Login with email and password
  async function login(email, password) {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  }

  // Logout
  async function logout() {
    await signOut(auth);
    setUserProfile(null);
  }

  // Reset password
  async function resetPassword(email) {
    await sendPasswordResetEmail(auth, email);
  }

  // Update profile
  function updateProfile(data) {
    if (currentUser) {
      const updated = { ...userProfile, ...data };
      saveProfile(currentUser.uid, updated);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        loadProfile(user.uid);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    logout,
    resetPassword,
    saveProfile,
    updateProfile,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
