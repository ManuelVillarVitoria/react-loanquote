// Usando 'imr' de react snippets se crea.
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
      <Header 
          titulo = "Cotizador de Préstamos"
          //descripcion = "Utiliza el formulario y obtén una cotización"
      />
    </Fragment>
  );
}

export default App;

