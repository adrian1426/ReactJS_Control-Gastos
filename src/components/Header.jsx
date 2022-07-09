import PresupuestoForm from "./PresupuestoForm";

const Header = (props) => {
  const { presupuesto, setPresupuestos, addedPresupuesto, setAddedPresupuesto } = props;

  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {
        addedPresupuesto ? (
          <p>Mnejador de presupuesto</p>
        ) : (
          <PresupuestoForm
            presupuesto={presupuesto}
            setPresupuestos={setPresupuestos}
            setAddedPresupuesto={setAddedPresupuesto}
          />
        )
      }
    </header>
  );
};

export default Header;