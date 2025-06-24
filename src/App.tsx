// import "antd/dist/antd.css";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import AuthRoute from "./routes/route";
import DashboardRoute from "./routes/DashboardRoute";
import { useNavigate } from "react-router-dom";

function App() {
  const { token } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/major");
    }
  }, [token, navigate]);
  return token ? <DashboardRoute /> : <AuthRoute />;
}

export default App;
