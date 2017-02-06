import { Component } from '@angular/core';
import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCPGHzbrFlp0YxvGa99XnkTZcezD7IdupU",
      authDomain: "jackle-apps.firebaseapp.com",
      databaseURL: "https://jackle-apps.firebaseio.com",
      storageBucket: "jackle-apps.appspot.com",
      messagingSenderId: "410170652820"
    };
    initializeApp(config);

    var root = database().ref('messages/2');
    root.on('value', function (snap) {
      console.log(snap.key, snap.val());
    });
  }
}
