import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDSDWb8qFfVpt6ixmDBlsT7jrz_-WTYw_U",
    authDomain: "code-challenge-3f304.firebaseapp.com",
    databaseURL: "https://code-challenge-3f304.firebaseio.com",
    projectId: "code-challenge-3f304",
    storageBucket: "code-challenge-3f304.appspot.com",
    messagingSenderId: "1023053627769"
  };
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
