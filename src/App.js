import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyD2-SVvovYRPjQfEgwGQsAj6tuTaqLtAj0',
    authDomain: 'manager-d088e.firebaseapp.com',
    databaseURL: 'https://manager-d088e.firebaseio.com',
    projectId: 'manager-d088e',
    storageBucket: 'manager-d088e.appspot.com',
    messagingSenderId: '474356321134'
  };
  firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text> Hallo Peepz</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
