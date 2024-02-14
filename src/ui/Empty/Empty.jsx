import "./Empty.scss";

const Empty = ({ resourceName }) => {
  return <p className="empty">No {resourceName} could be found.</p>;
};

export default Empty;
