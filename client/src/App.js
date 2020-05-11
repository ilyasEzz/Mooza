// React
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// CSS
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import { Landing } from './components/layout/Landing';
import { Navbar } from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
