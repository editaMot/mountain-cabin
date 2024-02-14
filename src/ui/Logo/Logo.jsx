import { useDarkMode } from "../../contexts/DarkModeContext";
import "./Logo.scss";

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "logo-lg-light.png" : "logo-lg-dark.png";

  return <img src={src} alt="Logo" className="logo" />;
};

export default Logo;
