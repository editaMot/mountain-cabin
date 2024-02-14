import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./TableActions.scss";

const TableActionsContext = createContext();

const TableActions = ({ children }) => {
  const [openId, setOpenId] = useState();
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <TableActionsContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </TableActionsContext.Provider>
  );
};

const Action = ({ children }) => {
  return <div className="table-actions__action">{children}</div>;
};

const Toggle = ({ id }) => {
  const { openId, close, open, setPosition } = useContext(TableActionsContext);

  const handleClick = (e) => {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <button className="table-actions__toggle" onClick={handleClick}>
      <HiEllipsisVertical />
    </button>
  );
};

const List = ({ id, children }) => {
  const { openId, close, position } = useContext(TableActionsContext);

  const ref = useClickOutside(close, false);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className="table-actions__list"
      ref={ref}
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
    >
      {children}
    </ul>,
    document.body
  );
};

const Button = ({ children, icon, onClick }) => {
  const { close } = useContext(TableActionsContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li>
      <button className="table-actions__btn" onClick={handleClick}>
        {icon} <span>{children}</span>
      </button>
    </li>
  );
};

TableActions.Action = Action;
TableActions.Toggle = Toggle;
TableActions.List = List;
TableActions.Button = Button;

export default TableActions;
