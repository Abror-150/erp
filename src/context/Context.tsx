import {
  createContext,
  useEffect,
  useState,
  type FC,
  type ReactNode,
} from "react";
import type { ContextType } from "../types/ContextType";

export const Context = createContext<ContextType>({
  token: false,
  setToken: () => false,
});

export const GlobalContext: FC<{ children: ReactNode }> = ({ children }) => {
  const isToken = localStorage.getItem("token");
  const [token, setToken] = useState<boolean>(
    (isToken && JSON.parse(isToken)) || false
  );
  localStorage.setItem("token", JSON.stringify(token));
  return (
    <Context.Provider value={{ setToken, token }}>{children}</Context.Provider>
  );
};
