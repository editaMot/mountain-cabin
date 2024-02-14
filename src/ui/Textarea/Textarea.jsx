import { forwardRef } from "react";
import "./Textarea.scss";

const Textarea = forwardRef(({ name, id, ...props }, ref) => {
  return (
    <textarea
      name={name}
      id={id}
      className="textarea"
      ref={ref}
      {...props}
      rows="100%"
    />
  );
});

export default Textarea;
