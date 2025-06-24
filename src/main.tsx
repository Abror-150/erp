import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalContext } from "./context/Context.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <GlobalContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalContext>
);
