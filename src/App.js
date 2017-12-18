import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    // der 2te Parameter ist für einen initial state, den wir vllt über unsere
    // Redux App übergeben wollen
    // das 3te Argument zählt zu den Store enhancers, um den store mehr funktionalität zu verpassen
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
