const Button = ({ children, type = "button", onClick, className = "" }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
