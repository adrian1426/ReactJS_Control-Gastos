import { useState } from 'react';
import Header from "./components/Header";
import IconNuevo from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuestos] = useState(0);
  const [addedPresupuesto, setAddedPresupuesto] = useState(false);

  return (
    <div >
      <Header
        presupuesto={presupuesto}
        setPresupuestos={setPresupuestos}
        addedPresupuesto={addedPresupuesto}
        setAddedPresupuesto={setAddedPresupuesto}
      />

      {
        addedPresupuesto && (
          <div className='nuevo-gasto'>
            <img src={IconNuevo} alt="icon add nuevo gasto" />
          </div>
        )
      }
    </div>
  )
}

export default App
