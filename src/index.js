import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
/* Redux Öğreniyorum */
// import { Provider } from 'react-redux'
// import { store } from './Redux/store'
// import store from './GlobalState/store'

/* React Context & Reducer */

import { AppLevelProvider } from './Context/AppLevelContext'

ReactDOM.render(
  <React.StrictMode>
    <AppLevelProvider>
      <Router>
        <App />
      </Router>
    </AppLevelProvider>
  </React.StrictMode>,
  document.getElementById('root')
);