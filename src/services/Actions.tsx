import type { Dispatch, SetStateAction } from "react";
import type { NavigateFunction } from "react-router-dom";
import { instance } from "../hooks/instance";
import toast from "react-hot-toast";

export const Delete = (
  url: string,
  token: string | null,
  setOpenModal: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  instance
    .delete(url, { headers: { Authorization: `Bearer ${token}` } })
    .then(() => {
      setTimeout(() => {
        setLoading(false);
        setOpenModal(false);
        navigate(-1);
      }, 1000);
    })
    .catch((err) => {
      setTimeout(() => {
        setLoading(false);
        setOpenModal(false);
        toast.error("Xatolik bor!");
        console.log(err.response?.data || err.message);
      }, 800);
    });
};
