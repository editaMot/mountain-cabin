import "./Stat.scss";

const Stat = ({ icon, title, value, color }) => {
  return (
    <div className="stat">
      <div className={`stat__icon ${color ? `stat__icon--${color}` : ""}`}>
        {icon}
      </div>
      <h3 className="stat__title">{title}</h3>
      <p className="stat__value">{value}</p>
    </div>
  );
};

export default Stat;
