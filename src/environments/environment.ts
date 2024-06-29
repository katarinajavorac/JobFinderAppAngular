// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const environment = {
  production:false,
  apiKey: "AIzaSyC3dID7QyQMAVAmjVOXxzn-HTgaV65LXzo",
  authDomain: "job-finder-app-152f8.firebaseapp.com",
  databaseURL: "https://job-finder-app-152f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "job-finder-app-152f8",
  storageBucket: "job-finder-app-152f8.appspot.com",
  messagingSenderId: "1097286523856",
  appId: "1:1097286523856:web:68849d1c271d3c3e1d77d5"
};

// Initialize Firebase
const app = initializeApp(environment);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.