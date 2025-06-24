import { Routes, Route } from "react-router-dom";
import { DashboardRouteLists } from "../hooks/paths";
import type { DashboarRouteType } from "../types/DashboardRouteType";
const DashboardRoute = () => {
  return (
    <Routes>
      {DashboardRouteLists.map((item: DashboarRouteType) => <Route path={item.path} element={item.element}/>
      )}
    </Routes>
  );
};

export default DashboardRoute;
