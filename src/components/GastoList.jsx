import React from 'react';
import GastoItem from './GastoItem';

const GastoList = (props) => {
  const { gastos } = props;

  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length > 0 ? 'Lista de gastos' : 'Aún no ha agregado gastos'}</h2>

      {gastos.map(gasto => (
        <GastoItem
          key={gasto.id}
          gasto={gasto}
        />
      ))}
    </div>
  );
};

export default GastoList;