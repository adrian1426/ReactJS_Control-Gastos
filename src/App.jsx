import { useState } from 'react';
import Header from "./components/Header"

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
    </div>
  )
}

export default App
