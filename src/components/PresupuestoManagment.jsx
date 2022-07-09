import React from 'react';

const PresupuestoManagment = (props) => {
  const { presupuesto } = props;

  const formattCurrency = (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica aquí</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto: </span> {formattCurrency(presupuesto)}
        </p>
        <p>
          <span>Gastado: </span> {formattCurrency(0)}
        </p>
        <p>
          <span>Disponible: </span> {formattCurrency(0)}
        </p>
      </div>
    </div>
  );
};

export default PresupuestoManagment;