import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBKQwJA4iQ0hVUG3iSw8sw4LVV7d0PDX1s',
            authDomain: 'manager-f1981.firebaseapp.com',
            databaseURL: 'https://manager-f1981.firebaseio.com',
            projectId: 'manager-f1981',
            storageBucket: '',
            messagingSenderId: '941298458295'
          };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
