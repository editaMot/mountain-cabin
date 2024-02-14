import { useState } from "react";
import {
  HiBars3,
  HiCalendarDays,
  HiCog8Tooth,
  HiHome,
  HiHomeModern,
  HiMiniUserGroup,
  HiOutlineXMark,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import "./MainNav.scss";

const MainNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="navigation">
      <div
        onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
        className={`navigation__toggle ${
          isNavOpen ? "navigation__toggle--light" : "navigation__toggle--dark"
        }`}
      >
        {isNavOpen ? <HiOutlineXMark /> : <HiBars3 />}
      </div>

      <ul
        className={`navigation__list ${!isNavOpen ? "hidden" : ""}`}
        onClick={() => setIsNavOpen(false)}
      >
        <li className="navigation__item">
          <NavLink to="/dashboard" className="navigation__link">
            <HiHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/bookings" className="navigation__link">
            <HiCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/cabins" className="navigation__link">
            <HiHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/users" className="navigation__link">
            <HiMiniUserGroup />
            <span>Users</span>
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/settings" className="navigation__link">
            <HiCog8Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
