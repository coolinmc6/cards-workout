import React from 'react';
import { render } from 'react-dom';
import './css/styles.scss';

import Home from './container/Home';

const App = () => {
  return (
    <>
      <Home />
    </>
  )
}

render(<App />, document.getElementById('root'));
