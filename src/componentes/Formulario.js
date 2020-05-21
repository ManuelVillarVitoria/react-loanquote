//imr(snippets React)
import React from 'react';

//sfc(snippets React)
const Formulario = ({cantidad,guardarCantidad,plazo,guardarPlazo}) => { //Aplicamos Destructuring

    //Definir el HookState usando array destructuring
    //Los valores siempre fluyen del padre al hijo y no al revés, por eso pondremos 
    // el State en App.js
    //const [cantidad, guardarCantidad] = useState(0);

    //const leerCantidad = (e) => {
        //console.log('Escribiendo cantidad....');
        //guardarCantidad( parseInt(e.target.value) );

    return (
        <form>
           {cantidad}
           {plazo}
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        //onChange={ leerCantidad }
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
      );

}

export default Formulario;