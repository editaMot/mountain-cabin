import DashboardFilter from "../../features/dashboard/DashboardFilter";
import DashboardLayout from "../../features/dashboard/DashboardLayout";
import PageHeader from "../../ui/PageHeader";

const Dashboard = () => {
  return (
    <>
      <PageHeader heading="Dashboard">
        <DashboardFilter />
      </PageHeader>
      <DashboardLayout />
    </>
  );
};

export default Dashboard;
