import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const title = 'C.Hill Min Setup';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();