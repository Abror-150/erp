import { Route, Routes } from "react-router-dom";
import { paths } from "../hooks/paths";
import { Home, SignIn } from "../pages/Auth";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.signIn} element={<SignIn />} />
    </Routes>
  );
};

export default AuthRoute;
