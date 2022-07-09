import React from 'react';

const GastoForm = (props) => {
  const { animarForm } = props;

  return (
    <form className={`formulario ${animarForm ? 'animar' : 'cerrar'}`}>
      <legend>Nuevo gasto</legend>
    </form>
  );
};

export default GastoForm;