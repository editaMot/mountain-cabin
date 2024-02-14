import "./Form.scss";

const Form = ({ children, type, login, ...props }) => {
  return (
    <form
      {...props}
      className={`form ${type ? `form--${type}` : ""} ${
        login ? `form--login` : ""
      }`}
    >
      {children}
    </form>
  );
};

export default Form;
