import { formatearFecha } from '../helpers/index';

const GastoItem = (props) => {
  const { gasto } = props;

  return (
    <div className='gasto sombra'>

      <div className='contenido-gasto'>
        <div className='descripcion-gasto'>
          <p className='categoria'>{gasto.categoria}</p>
          <p className='nombre-gasto'>{gasto.nombre}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{formatearFecha(gasto.fecha)}</span>
          </p>
        </div>
      </div>

      <p className='cantidad-gasto'>${Number(gasto.monto)}</p>
    </div>
  );
};

export default GastoItem;