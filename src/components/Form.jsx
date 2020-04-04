import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({guardarGasto,guardarCrearGasto}) => {

    const[nombre,setNombre] = useState('');
    const [cantidad,setCantidad] = useState(0);
    const [error,setError] = useState(false);

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //resetear el form
        setNombre('');
        setCantidad(0);
    }

    return ( 
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus hechizos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o mana incorrecto"/> : null}
            <div className="campo">
            <label>Nombre hechizo: </label>
            <input
             type="text"
             className="u-full-width"
             placeholder="Ej. Desperuanizador"
             value={nombre}
             //en este caso agregaremos la func directamente, lo que el usuario escriba se va agregar al state
             onChange={e => setNombre(e.target.value)}
            />
            </div>
   
            <div className="campo">
            <label>Hechizo: </label>
            <input
             type="number"
             className="u-full-width"
             placeholder="Ej. 300"
             value={cantidad}
             onChange={e => setCantidad(parseInt(e.target.value,10))}
             />
            </div>

            <input 
            type="submit"
            className="button-primary u-full-width"
            value="Agregar Mana"
            />
        </form>
     );
}
Form.propType = {
    guardarGasto : PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
} 

export default Form;