import UpdatePasswordForm from "../../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../../features/authentication/UpdateUserDataForm";
import PageHeader from "../../ui/PageHeader";

const Account = () => {
  return (
    <>
      <PageHeader heading="Update your account" />
      <h2>Update user data</h2>
      <UpdateUserDataForm />
      <h2>Update password</h2>
      <UpdatePasswordForm />
    </>
  );
};

export default Account;
