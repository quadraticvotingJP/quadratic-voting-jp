import { initializeApp, apps, app } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
};

// initialize
export const firebase = !apps ? initializeApp(firebaseConfig) : app();
// authentication
export const authentication = getAuth();
// storage
export const storage = getStorage(firebase);

// GA
let GetAnalytics;
if (firebase.name && typeof window !== "undefined") {
  GetAnalytics = getAnalytics(firebase);
}
export const analytics = GetAnalytics;
