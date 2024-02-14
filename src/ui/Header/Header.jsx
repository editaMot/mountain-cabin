import { HiOutlineMoon, HiOutlineSun, HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";
import Logout from "../../features/authentication/Logout/Logout";
import UserAvatar from "../../features/authentication/UserAvatar/UserAvatar";
import Button from "../Button/Button";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="header">
      <UserAvatar />
      <Button variation="text" onClick={() => navigate("/account")}>
        <HiOutlineUser />
      </Button>
      <Button variation="text" onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
      <Logout />
    </header>
  );
};

export default Header;
