import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import ManaControl from "./components/ManaControl";

function App() {
  //Definir el state
  const [cantidad, setCantidad] = useState(0);
  const [restante, setRestante] = useState(0);
  //El siguiente state es para la carga condicional de componentes
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos,guardarGastos] = useState([]);
  const [gasto,guardarGasto] = useState({});
  const [crearGasto,guardarCrearGasto] = useState(false);
  //useEffect que actualiza el restante
  useEffect(()=>{
    if(crearGasto) {
      //agregar el nuevo presupuesto
      guardarGastos([
        //tomamos una copia
        ...gastos,
        gasto
      ]);
      //resta del presupuesto actual
      const manaRestante = restante - gasto.cantidad;
      setRestante(manaRestante);

      //Resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante])
 

  return (
    <div className="container">
      <header>
        <div className="contenido-principal">
          {mostrarpregunta ? (
            <Question
              setCantidad={setCantidad}
              setRestante={setRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form 
                guardarGasto = {guardarGasto}
                guardarCrearGasto = {guardarCrearGasto}
                />
              </div>

              <div className="one-half column">
              <List
              gastos={gastos}
              />
              <ManaControl
              cantidad={cantidad}
              restante={restante}
              />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
