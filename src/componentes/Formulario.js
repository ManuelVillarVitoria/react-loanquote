//imr(snippets React)
import React, { Fragment, useState } from 'react';
import {calcularTotal} from '../helpers';

//sfc(snippets React)
const Formulario = (props) => { //Aplicamos Destructuring

    const {cantidad,guardarCantidad,plazo,guardarPlazo,guardarTotal,guardarCargando} = props;

    //Definir Hook useState de manera local
    const [error, guardarError] = useState(false);

    //Función para cuando el usuario hace submit
    const calcularPrestamo = e => {
        e.preventDefault();
        //console.log('Enviando formulario...');

        //Validar
        if(cantidad === 0 || plazo === '') {
            //console.log('Hay un error...');
            guardarError(true);
            return;
       }
       //Elimina el error previo, si el usuario corrige el error
       guardarError(false);
        
       //Habilitar el spinner
       guardarCargando(true);

       setTimeout(() => {
            //Realizar cotización
            const total = calcularTotal(cantidad,plazo);
            //console.log(total);
            //Una vez calculado, guardarTotal
            guardarTotal(total);

            //Deshabilitar el Spinner
            guardarCargando(false);
       },3000);
       
    }

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000" 
                            onChange= {e => guardarCantidad( parseInt(e.target.value) )}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange= {e => guardarPlazo( parseInt(e.target.value) )}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>
            
            {/*Si el error es verdadero mostrar el mensaje de error y sino, no no mostrar nada */}
            { (error) ? <p className="error">Todos los campos son obligatorios</p> : null}
           
        </Fragment>
      );

}

export default Formulario;