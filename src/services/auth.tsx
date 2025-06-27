import type { valueType } from "antd/es/statistic/utils";
import type { Dispatch, SetStateAction } from "react";
import { instance } from "../hooks/instance";
import toast from "react-hot-toast";
export const Login = (
  data: valueType,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setToken: Dispatch<SetStateAction<string | null>>
) => {
  instance
    .post("user/login", data)
    .then((data) => {
      setIsLoading(false);
      toast.success("xush kelibsiz");

      setTimeout(() => {
        setToken(data.data.accessToken);
        location.pathname = "/";
      }, 800);
      // navigate("/major");
    })
    .catch((err) => {
      setIsLoading(false);
      if (err?.response?.status == 400) {
        toast.error("foydalanuvchi topilmadi");
      } else {
        toast.error("xatolik bor");
      }
    });
  return "";
};
