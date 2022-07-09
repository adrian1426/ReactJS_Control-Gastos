import { useState } from 'react';
import Modal from './components/common/Modal';
import Header from "./components/Header";
import IconNuevo from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuestos] = useState(0);
  const [addedPresupuesto, setAddedPresupuesto] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleAddGasto = () => {
    setOpenModal(true);
  };

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
            <img
              src={IconNuevo}
              alt="icon add nuevo gasto"
              onClick={handleAddGasto}
            />
          </div>
        )
      }

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <p>Aqúi el modal</p>
        </Modal>
      )}
    </div>
  )
}

export default App
