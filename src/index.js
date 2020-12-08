import React from 'react';
import { render } from 'react-dom';
import './css/styles.scss';

import Home from './container/Home';
import Home2 from './container/Home2';

const App = () => {
  return (
    <>
      <Home2 />
    </>
  )
}

render(<App />, document.getElementById('root'));
