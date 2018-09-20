import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route}  from 'react-router';
import {BrowserRouter}  from 'react-router-dom';

import Details from './Details'
import Home from './Home'
import Login from './Login';
import Profile from './Profile'
import Results from './Results'
import Skills from './Skills'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/skills" component={Skills} />
      <Route path="/details" component={Details} />
      <Route path="/home" component={Home} />
      <Route path="/results" component={Results} />
    </div>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
