import PresupuestoForm from "./PresupuestoForm";

const Header = (props) => {
  const { presupuesto, setPresupuestos } = props;

  return (
    <header>
      <h1>Planificador de Gastos</h1>
      <PresupuestoForm
        presupuesto={presupuesto}
        setPresupuestos={setPresupuestos}
      />
    </header>
  );
};

export default Header;