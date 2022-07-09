import { useState } from 'react';
import Message from './common/Message';

const PresupuestoForm = (props) => {
  const { presupuesto, setPresupuestos } = props;
  const [messageError, setMessageError] = useState();

  const validationPresupuesto = () => {
    const presupuestoNumber = Number(presupuesto);
    return presupuestoNumber && presupuestoNumber > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validationPresupuesto();

    if (isValid) {
      setMessageError(null);
    } else {
      setMessageError('Presupuesto No Válido. Debe ser numérico y mayor a 0');
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
            type="text"
            value={presupuesto}
            onChange={(e) => setPresupuestos(e.target.value)}
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