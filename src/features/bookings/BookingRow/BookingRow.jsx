import { format, isToday } from "date-fns";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import BookingStatus from "../../../ui/BookingStatus";
import ConfirmDelete from "../../../ui/ConfirmDelete/ConfirmDelete";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import TableActions from "../../../ui/TableActions";
import { formatCurrency, formatDistanceFromNow } from "../../../utils/helpers";
import { useCheckout } from "../../check-in-out/useCheckout";
import { useDeleteBooking } from "../useDeleteBooking";
import "./BookingRow.scss";

const BookingRow = ({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) => {
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const navigate = useNavigate();

  return (
    <Table.Row>
      <div className="cabin">{cabinName}</div>
      <div className="guest">
        <span>{guestName}</span>
        <span>{email}</span>
      </div>
      <div className="duration">
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>
      <BookingStatus status={status}>{status}</BookingStatus>
      <div className="amount">{formatCurrency(totalPrice)}</div>

      <Modal>
        <TableActions.Action>
          <TableActions.Toggle id={bookingId} />
          <TableActions.List id={bookingId}>
            <TableActions.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </TableActions.Button>
            {status === "unconfirmed" && (
              <TableActions.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </TableActions.Button>
            )}
            {status === "checked-in" && (
              <TableActions.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </TableActions.Button>
            )}

            <Modal.Open opens="delete-booking">
              <TableActions.Button
                icon={<HiTrash />}
                onClick={() => deleteBooking(bookingId)}
                disabled={isDeleting}
              >
                Delete
              </TableActions.Button>
            </Modal.Open>
          </TableActions.List>

          <Modal.Window name="delete-booking">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </TableActions.Action>
      </Modal>
    </Table.Row>
  );
};

export default BookingRow;
