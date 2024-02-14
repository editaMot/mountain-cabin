import "./FormRow.scss";

const FormRow = ({ label, children, error, vertical }) => {
  return (
    <div className={`form-row ${vertical ? `form-row--vertical` : ""}`}>
      {label && (
        <label
          htmlFor={children.props.id}
          className={`form-row__label ${
            vertical ? "form-row__label--vertical" : ""
          }`}
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="form-row__error">{error}</span>}
    </div>
  );
};

export default FormRow;
