import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import "./AppLayout.scss";

const AppLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default AppLayout;
