import { useState } from 'react';
import Message from './common/Message';

const PresupuestoForm = (props) => {
  const { presupuesto, setPresupuestos, setAddedPresupuesto } = props;
  const [messageError, setMessageError] = useState();

  const validationPresupuesto = () => {
    return presupuesto > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validationPresupuesto();

    if (isValid) {
      setMessageError(null);
      setAddedPresupuesto(true);
    } else {
      setMessageError('Presupuesto No Válido. Debe ser numérico y mayor a 0');
      setAddedPresupuesto(false);
    }
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handleSubmit} className='formulario'>
        <div className='campo'>
          <label>Definir presupuesto</label>
          <input
            className='nuevo-presupuesto'
            placeholder='Agrega tu presupuesto'
            type="number"
            value={presupuesto}
            onChange={(e) => setPresupuestos(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Agregar" />

        {messageError && (
          <Message tipo='error'>
            {messageError}
          </Message>
        )}
      </form>
    </div>
  );
};

export default PresupuestoForm;