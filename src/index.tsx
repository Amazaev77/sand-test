import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);