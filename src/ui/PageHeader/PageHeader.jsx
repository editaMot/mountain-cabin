import "./PageHeader.scss";

const PageHeader = ({ heading, children }) => {
  return (
    <div className="page-header">
      <h1 className="page-header__heading">{heading}</h1>
      {children}
    </div>
  );
};

export default PageHeader;
