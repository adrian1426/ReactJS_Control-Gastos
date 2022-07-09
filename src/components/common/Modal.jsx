import IconClose from '../../img/cerrar.svg';

const Modal = (props) => {
  const { children, setOpenModal } = props;

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={IconClose}
          alt="cerrar"
          onClick={() => setOpenModal(false)}
        />
      </div>
      {children}
    </div>
  );
};

export default Modal;