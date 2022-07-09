import React from 'react';

const GastoForm = (props) => {
  const { animarForm } = props;

  return (
    <form className={`formulario ${animarForm ? 'animar' : 'cerrar'}`}>
      <legend>Nuevo gasto</legend>
      <div className='campo'>
        <label htmlFor="nombre">Nombre gasto</label>
        <input
          type="text"
          id="nombre"
        />
      </div>
      <div className='campo'>
        <label htmlFor="cantidad">Monto</label>
        <input
          type="number"
          id="cantidad"
        />
      </div>
      <div className='campo'>
        <label htmlFor="categoria">Categoría</label>
        <select id="categoria">
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