import { Outlet } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
