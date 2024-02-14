import SignupForm from "../../features/authentication/SignupForm";
import PageHeader from "../../ui/PageHeader";

const Users = () => {
  return (
    <>
      <PageHeader heading="Create new user" />
      <SignupForm />
    </>
  );
};

export default Users;
