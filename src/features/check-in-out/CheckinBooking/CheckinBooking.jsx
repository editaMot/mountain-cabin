import { useEffect, useState } from "react";
import { useMoveBack } from "../../../hooks/useMoveBack";
import Button from "../../../ui/Button";
import Checkbox from "../../../ui/Checkbox";
import Spinner from "../../../ui/Spinner";
import { formatCurrency } from "../../../utils/helpers";
import BookingDataBox from "../../bookings/BookingDataBox";
import { useBooking } from "../../bookings/useBooking";
import { useSettings } from "../../settings/useSettings";
import { useCheckin } from "../useCheckin";
import "./CheckinBooking.scss";

const CheckinBooking = () => {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <div className="checkin__header">
        <h1 className="checkin__heading">Check in booking #{bookingId}</h1>
        <Button variation="text" onClick={moveBack}>
          &larr; Back
        </Button>
      </div>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <div className="checkin__checkbox">
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </div>
      )}
      <div className="checkin__checkbox">
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </div>

      <div className="checkin__button-group">
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </>
  );
};

export default CheckinBooking;
