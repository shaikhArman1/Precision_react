// Firebase Configuration
// =====================
// Follow these steps to set up Firebase:
//
// 1. Go to https://console.firebase.google.com/
// 2. Click "Create a project" (or "Add project")
// 3. Enter a project name (e.g., "precision-agency") → Continue
// 4. Disable Google Analytics (not needed) → Create Project
// 5. Once created, click the web icon "</>" to add a web app
// 6. Enter app nickname (e.g., "precision-web") → Register app
// 7. Copy the firebaseConfig object values below
// 8. Create a .env file in the project root (my-dashboard/.env)
//    and paste these values:
//
//    VITE_FIREBASE_API_KEY=your_api_key_here
//    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
//    VITE_FIREBASE_PROJECT_ID=your_project_id
//    VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
//    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
//    VITE_FIREBASE_APP_ID=your_app_id
//
// 9. In Firebase Console, go to Authentication → Get Started
// 10. Enable "Email/Password" sign-in method
// =====================

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
