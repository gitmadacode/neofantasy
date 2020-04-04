import React from 'react';
import PropTypes from 'prop-types';
//hacemos implicito el return por que NO vamos a hacer ninguna operacion,solamente mostrar lo que le llega al componente
const Gasto = ({gasto}) => ( 
    <li className="gastos">
    <p>
        {gasto.nombre}

        <span className="gasto">$ {gasto.cantidad}</span>
    </p>
    </li>
 );
    Gasto.propTypes = {
        gastos: PropTypes.object.isRequired
    }
 
export default Gasto;