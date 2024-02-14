import { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(({ type, id, ...props }, ref) => {
  return <input type={type} id={id} className="input" ref={ref} {...props} />;
});

export default Input;
