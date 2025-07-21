export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "apikey" ,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "authDomain",
  projectId: process.env.FIREBASE_PROJECT_ID || "123123",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "storageBucket",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "321321",
  appId: process.env.FIREBASE_APP_ID || "001001",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "100100"
};