import React, {Fragment} from 'react';


//Creamos el componente Header
//function Header(props) {
  function Header({titulo}) { // Hacemos destructuring

     console.log(titulo);

    //Este return en React imprime el html en el template.
    //Cuando hay más de un valor dentro de return, hay que poner Fragment o <div className="App">
    //Si queremos colocar código JS dentro del JSX, debemos colocarlo entre llaves.
    return(
        <Fragment> 
       {/* <h1>{props.titulo}</h1> */}
       {/* <p>{props.descripcion}</p> */}
           <h1>{titulo}</h1>
        </Fragment>
    )
}

export default Header;