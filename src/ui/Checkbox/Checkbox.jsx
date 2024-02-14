import "./Checkbox.scss";

const Checkbox = ({ id, checked, onChange, disabled = false, children }) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""} className="checkbox__label">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
