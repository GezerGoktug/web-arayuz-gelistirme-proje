const Button = ({ children, className, ...props }) => {
  return (
    <button type="button" className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
