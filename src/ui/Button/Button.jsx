import "./Button.scss";

const Button = ({
  children,
  size = "medium",
  variation = "primary",
  ...props
}) => {
  return (
    <button
      className={`btn ${size ? `btn--${size}` : ""} ${
        variation ? `btn--${variation}` : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
