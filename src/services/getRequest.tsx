import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { instance } from "../hooks/instance";

export const getRequest = (url: string, params?: any) => {
  const [data, setData] = useState<any>([]);
  const { token } = useContext(Context);

  useEffect(() => {
    instance(url, {
      params,
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => setData(res.data));
  }, []);
  return data;
};
