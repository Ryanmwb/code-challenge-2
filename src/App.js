import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
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
  constructor(props){
    super(props)
    this.state = {
      currentRoom: null, 
      currentRoomName: null,
      user: null
    }
  }

  changeCurrentRoom(room){
    this.setState({ currentRoom: room.key })
    this.setState({ currentRoomNAme: room.name })
    console.log(this.state.currentRoom)
  }

  setUser(user){
    this.setState({user: user})
    console.log(user)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>ChatRoom</h1>
        </header>
        <main>
          <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user}/>
          <MessageList firebase={firebase}/>
          <RoomList firebase={firebase} changeCurrentRoom={(room) => this.changeCurrentRoom(room)} />
        </main>
      </div>
    );
  }
}

export default App;
