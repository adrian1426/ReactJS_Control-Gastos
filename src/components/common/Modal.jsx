import IconClose from '../../img/cerrar.svg';

const Modal = (props) => {
  const { children, handlecloseModal } = props;

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={IconClose}
          alt="cerrar"
          onClick={handlecloseModal}
        />
      </div>
      {children}
    </div>
  );
};

export default Modal;