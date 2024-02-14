import BookingTable from "../../features/bookings/BookingTable";
import BookingTableOperations from "../../features/bookings/BookingTableOperations";
import PageHeader from "../../ui/PageHeader";

const Bookings = () => {
  return (
    <>
      <PageHeader heading="All bookings">
        <BookingTableOperations />
      </PageHeader>
      <BookingTable />
    </>
  );
};

export default Bookings;
