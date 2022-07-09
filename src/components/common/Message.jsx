const Message = (props) => {
  const { children, tipo } = props;

  return (
    <div className={`alerta ${tipo}`}>
      {children}
    </div>
  );
};

export default Message;