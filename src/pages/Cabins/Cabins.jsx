import AddCabin from "../../features/cabins/AddCabin";
import CabinTable from "../../features/cabins/CabinTable";
import CabinTableOperations from "../../features/cabins/CabinTableOperations";
import PageHeader from "../../ui/PageHeader";

const Cabins = () => {
  return (
    <>
      <PageHeader heading="All Cabins">
        <CabinTableOperations />
      </PageHeader>
      <CabinTable />
      <AddCabin />
    </>
  );
};

export default Cabins;
