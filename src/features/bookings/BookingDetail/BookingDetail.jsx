import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../../hooks/useMoveBack";
import BookingStatus from "../../../ui/BookingStatus";
import Button from "../../../ui/Button";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { useCheckout } from "../../check-in-out/useCheckout";
import BookingDataBox from "../BookingDataBox";
import { useBooking } from "../useBooking";
import { useDeleteBooking } from "../useDeleteBooking";
import "./BookingDetail.scss";

const BookingDetail = () => {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resourceName="booking" />;

  const { status, id: bookingId } = booking;

  return (
    <>
      <div className="booking__header">
        <div className="booking__header-group">
          <h1 className="booking__heading">Booking #{bookingId}</h1>
          <BookingStatus status={status}>{status}</BookingStatus>
        </div>
        <Button variation="text" onClick={moveBack}>
          &larr; Back
        </Button>
      </div>

      <BookingDataBox booking={booking} />

      <div className="booking__button-group">
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Button
          variation="danger"
          onClick={() =>
            deleteBooking(bookingId, {
              onSettled: () => navigate(-1),
            })
          }
          disabled={isDeleting}
        >
          Delete
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </>
  );
};

export default BookingDetail;
