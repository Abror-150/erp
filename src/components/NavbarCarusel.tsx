import React, { useContext } from "react";

import { Menu } from "antd";
import { DashboardNavList } from "../hooks/paths";
import { Context } from "../context/Context";

const NavbarCarusel: React.FC = () => {
  const { showNavbar } = useContext(Context);
  return (
    <div style={{ width: "100%" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={showNavbar}
        items={DashboardNavList}
      />
    </div>
  );
};

export default NavbarCarusel;
