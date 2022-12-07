import React from 'react';

const GastoItem = (props) => {
  const { gasto } = props;

  return (
    <div>
      <p>{gasto.categoria}</p>
    </div>
  );
};

export default GastoItem;