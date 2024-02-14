import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <MainNav />
    </aside>
  );
};

export default Sidebar;
