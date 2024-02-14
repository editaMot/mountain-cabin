import { forwardRef } from "react";
import "./FileInput.scss";

const FileInput = forwardRef(({ id, ...props }, ref) => {
  return (
    <input type="file" id={id} className="file-input" ref={ref} {...props} />
  );
});

export default FileInput;
