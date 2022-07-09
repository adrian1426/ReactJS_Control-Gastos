import React from 'react';

const PresupuestoForm = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario'>
        <div className='campo'>
          <label>Definir presupuesto</label>
          <input
            className='nuevo-presupuesto'
            placeholder='Agrega tu presupuesto'
            type="text"
          />
        </div>

        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
};

export default PresupuestoForm;