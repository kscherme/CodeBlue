import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Details from './Details';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import Skills from './Skills';


ReactDOM.render(
  <Details />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
