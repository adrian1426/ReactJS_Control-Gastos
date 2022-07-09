import { useState } from 'react';
import Header from "./components/Header"

function App() {
  const [presupuesto, setPresupuestos] = useState(0);

  return (
    <div >
      <Header
        presupuesto={presupuesto}
        setPresupuestos={setPresupuestos}
      />
    </div>
  )
}

export default App
