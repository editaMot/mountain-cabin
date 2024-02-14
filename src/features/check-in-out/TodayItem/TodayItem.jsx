import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button";
import { useCheckout } from "../useCheckout";
import "./TodayItem.scss";
import BookingStatus from "../../../ui/BookingStatus";

const TodayItem = ({ activity }) => {
  const { id, status, guests, numNights } = activity;
  const { checkout, isCheckingOut } = useCheckout();
  const navigate = useNavigate();

  return (
    <li className="item">
      {status === "unconfirmed" && (
        <BookingStatus status={status}>Arriving</BookingStatus>
      )}
      {status === "checked-in" && (
        <BookingStatus status={status}>Departing</BookingStatus>
      )}

      <img
        src={guests.countryFlag}
        alt={`Flag of ${guests.country}`}
        className="item__flag"
      />
      <div className="item__guest">{guests.fullName}</div>
      <div className="item__nights">{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="secondary"
          onClick={() => navigate(`/checkin/${id}`)}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && (
        <Button
          variation="primary"
          size="small"
          onClick={() => checkout(id)}
          disabled={isCheckingOut}
        >
          Check out
        </Button>
      )}
    </li>
  );
};

export default TodayItem;
