import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const Question = ({setCantidad,setRestante,actualizarPregunta}) => {
  //Definir el state
  const [mana, setMana] = useState(0);
  const [error,setError] =useState(false);

  //Funcion que lee el mana(el onchange del input define que func se usara)
  const definirMana = e => {
    setMana(parseInt(e.target.value, 10));
  };

  //Submit para definir el mana
  const agregarMana = e => {
      //Para que no recarge la pagina
      e.preventDefault();
      //validar
    if(mana < 1 || isNaN (mana)){  //isNan = en caso de que no sea un numero lo que el usuario coloca
        setError(true);
        return;
    }
    //si pasa la validacion
    setError(false);
    setCantidad(mana);
    setRestante(mana);
    actualizarPregunta(false);
  }

  return (
    <Fragment>
      <h2 className="animated infinite bounce delay-2s">Ingresa tu mana</h2>

      { error ? <Error mensaje="El mana es incorrecto"/> : null}

      <form
      onSubmit={agregarMana}
      >
        <img
          className="animated infinite pulse delay-2s"
          src="https://cdn.discordapp.com/attachments/546890518207135746/694688701359456316/chara008.png"
          alt="Rinko"
        ></img>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ingresa tu cantidad de mana"
          onChange={definirMana}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Ingresar mana"
        />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  setCantidad: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired
}
export default Question;
