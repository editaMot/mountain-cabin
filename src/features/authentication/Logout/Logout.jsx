import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../../../ui/Button";
import { useLogout } from "../useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <Button variation="text" onClick={logout} disabled={isLoading}>
      <HiArrowRightOnRectangle />
    </Button>
  );
};

export default Logout;
