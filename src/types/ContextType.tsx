import type { Dispatch, SetStateAction } from "react";

export interface ContextType {
  token: boolean;
  setToken: Dispatch<SetStateAction<boolean>>;
}
