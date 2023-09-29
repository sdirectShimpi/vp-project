import { initializeApp } from "firebase/app";
import { getToken, onMessage } from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

const Firebase = {
  apiKey: "AIzaSyCmusvA3BVQydK37r9B1lQu3bxoOSf8t5o",
  authDomain: "vp-project-b7d19.firebaseapp.com",
  projectId: "vp-project-b7d19",
  storageBucket: "vp-project-b7d19.appspot.com",
  messagingSenderId: "549363752289",
  appId: "1:549363752289:web:05499e75b4b9563db53920",
  measurementId: "G-8618EX0822",
};

const app = initializeApp(Firebase);
const messaging = getAnalytics(app);

export const requestPermission = () => {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        return getToken(messaging, {
          vapidKey:
            "BJel6f_8BSxfdbr8rXblBxcIht8-1n5m4lNWz9bbGVEPbflOZeBAv6LuU_bpsXNmcc77g3Jmln-hMMPilZkHT_w",
        });
      } else {
        console.log("User permission denied");
        return null;
      }
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("Current Token", currentToken);
      } else {
        console.log("Failed to get token");
      }
    })
    .catch((err) => {
      console.log("An error occurred while receiving the token", err);
    });
};
requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
