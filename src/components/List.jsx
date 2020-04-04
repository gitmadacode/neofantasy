import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const List = ({gastos}) =>  ( 
    <div className="gastos-realizados">
    <h2>Listado</h2>
    {/*Usamos .map para iterar,accedemos a cada gasto*/}
    {gastos.map(gasto =>(
        <Gasto
        key={gasto.id}
        gasto={gasto}
        />
    ))}
    </div>
 );

List.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default List;