import "./BookingStatus.scss";

const BookingStatus = ({ status, children }) => {
  return <span className={`status ${`status--${status}`}`}>{children}</span>;
};

export default BookingStatus;
