import { useState } from 'react';
import Modal from './components/common/Modal';
import GastoForm from './components/GastoForm';
import Header from "./components/Header";
import IconNuevo from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuestos] = useState(0);
  const [addedPresupuesto, setAddedPresupuesto] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [animarForm, setAnimarForm] = useState(false);

  const handleAddGasto = () => {
    setOpenModal(true);

    setTimeout(() => {
      setAnimarForm(true);
    }, 200);
  };

  const handlecloseModal = () => {
    setAnimarForm(false);

    setTimeout(() => {
      setOpenModal(false);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    console.log(gasto);
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
        <Modal handlecloseModal={handlecloseModal}>
          <GastoForm
            animarForm={animarForm}
            guardarGasto={guardarGasto}
          />
        </Modal>
      )}
    </div>
  )
}

export default App
