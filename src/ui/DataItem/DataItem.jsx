import "./DataItem.scss";

const DataItem = ({ icon, label, children }) => {
  return (
    <div className="data-item">
      <span className="data-item__label">
        {icon} <span>{label}</span>
      </span>
      {children}
    </div>
  );
};

export default DataItem;
