import { useState } from 'react';
import Modal from './components/common/Modal';
import GastoForm from './components/GastoForm';
import { generarId } from './helpers/index';
import Header from "./components/Header";
import IconNuevo from './img/nuevo-gasto.svg';
import GastoList from './components/GastoList';

function App() {
  const [presupuesto, setPresupuestos] = useState(0);
  const [addedPresupuesto, setAddedPresupuesto] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [animarForm, setAnimarForm] = useState(false);
  const [gastos, setGastos] = useState([]);

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
    const newGasto = {
      id: generarId(),
      fecha: Date.now(),
      ...gasto
    };

    setGastos([...gastos, newGasto]);

    handlecloseModal();
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
          <>
            <main>
              <GastoList
                gastos={gastos}
              />
            </main>

            <div className='nuevo-gasto'>
              <img
                src={IconNuevo}
                alt="icon add nuevo gasto"
                onClick={handleAddGasto}
              />
            </div>
          </>
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
