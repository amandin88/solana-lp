const Button = ({ variant = '', label, icon, action }) => {
  return (
    <div className={`button ${variant}`} onClick={() => action()}>
      {label}
      {icon && <img src={icon} alt='' />}
    </div>
  );
};

export default Button;
