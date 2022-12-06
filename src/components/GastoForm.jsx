import { useState } from 'react';
import Message from './common/Message';

const initialState = {
  nombre: '',
  monto: 0,
  categoria: ''
};

const GastoForm = (props) => {
  const { animarForm, guardarGasto } = props;
  const [gasto, setGasto] = useState(initialState);
  const [mensajeError, setMensajeError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    setGasto(gast => ({
      ...gast,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if ([gasto.nombre, gasto.categoria, gasto.monto].includes('') || [gasto.monto].includes(0)) {
      setMensajeError('Todos los campos son obligatorios');

      setTimeout(() => {
        setMensajeError('');
      }, 2000);
      return;
    } else {
      setMensajeError('');
      guardarGasto(gasto);
    }
  };

  return (
    <form
      className={`formulario ${animarForm ? 'animar' : 'cerrar'}`}
      onSubmit={handleSubmit}
    >
      <legend>Nuevo gasto</legend>
      {mensajeError && (<Message tipo='error'>{mensajeError}</Message>)}

      <div className='campo'>
        <label htmlFor="nombre">Nombre gasto</label>
        <input
          type="text"
          id="nombre"
          name='nombre'
          value={gasto.nombre}
          onChange={handleChange}
        />
      </div>

      <div className='campo'>
        <label htmlFor="monto">Monto</label>
        <input
          type="number"
          id="monto"
          name='monto'
          value={gasto.monto}
          onChange={handleChange}
        />
      </div>

      <div className='campo'>
        <label htmlFor="categoria">Categoría</label>
        <select
          id="categoria"
          name='categoria'
          value={gasto.categoria}
          onChange={handleChange}
        >
          <option value="">-- Seleccione --</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="gastos">Gastos</option>
          <option value="ocio">Ocio</option>
          <option value="salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>
        </select>
      </div>

      <input
        type="submit"
        value="Agregar gasto"
      />
    </form>
  );
};

export default GastoForm;