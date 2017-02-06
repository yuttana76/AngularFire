
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {

    apiKey: "AIzaSyCPGHzbrFlp0YxvGa99XnkTZcezD7IdupU",
    authDomain: "jackle-apps.firebaseapp.com",
    databaseURL: "https://jackle-apps.firebaseio.com",
    storageBucket: "jackle-apps.appspot.com",
    messagingSenderId: "410170652820"

};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};