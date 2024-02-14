import { createContext, useContext } from "react";
import "./Table.scss";

const TableContext = createContext();

const Table = ({ columns, children }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div role="table" className="table">
        {children}
      </div>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <div
      className="table__header"
      role="row"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
};

const Row = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <div
      className="table__row"
      role="row"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
};

const Body = ({ data, render }) => {
  if (!data) return <p className="table__empty"></p>;

  return <div className="table__body">{data.map(render)}</div>;
};

const Footer = ({ children }) => {
  return <div className="table__footer">{children}</div>;
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
