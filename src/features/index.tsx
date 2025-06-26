import Navbar from "../modules/Navbar";
import Header from "../modules/Header";
import DashboardRoute from "../routes/DashboardRoute";
import { useContext } from "react";
import { Context } from "../context/Context";

const Layout = () => {
  const { showNavbar } = useContext(Context);
  return (
    <div className="flex">
      <Navbar />
      <div className={`${showNavbar ? "w-full" : "w-[82%]"}`}>
        <Header />
        <DashboardRoute />
      </div>
    </div>
  );
};

export default Layout;
