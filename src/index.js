import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './scss/app.scss';
import App from './App';

var firebaseConfig = {
  apiKey: "AIzaSyCc6l5OIXI3eiPbWymTLVtMXdLUKkFfFwg",
  authDomain: "react-coffe.firebaseapp.com",
  projectId: "react-coffe",
  storageBucket: "react-coffe.appspot.com",
  messagingSenderId: "161076758992",
  appId: "1:161076758992:web:03fa3e5832260b95f5d1d5",
  measurementId: "G-94ZVXMCT86"
};

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
