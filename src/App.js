import React, { Fragment } from 'react';
import Header from './componentes/Header';

/*
function App() {
  return (
    <div className="App">
    <Header />
      
    </div>
  );
}
*/

//Con Fragment
function App() {
  return (
    <Fragment>
      <Header />
      <Header />
      <Header />
      <Header />
    </Fragment>
  );
}

export default App;

