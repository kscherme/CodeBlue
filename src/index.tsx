import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Results from './Results';

ReactDOM.render(
  <Results />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
