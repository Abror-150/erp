// import "antd/dist/antd.css";
import { useContext } from "react";
import { Context } from "./context/Context";
import AuthRoute from "./routes/route";
import Layout from "./features";

function App() {
  const { token } = useContext(Context);

  return token ? <Layout /> : <AuthRoute />;
}

export default App;
