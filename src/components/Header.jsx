import PresupuestoForm from "./PresupuestoForm";
import PresupuestoManagment from "./PresupuestoManagment";

const Header = (props) => {
  const { presupuesto, setPresupuestos, addedPresupuesto, setAddedPresupuesto } = props;

  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {
        addedPresupuesto ? (
          <PresupuestoManagment
            presupuesto={presupuesto}
          />
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