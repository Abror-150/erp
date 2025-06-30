import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { instance } from "../hooks/instance";

export const useGetOne = <T,>(url: string, dependency: any) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { token } = useContext(Context);

  useEffect(() => {
    if (!dependency) return;

    setLoading(true);
    instance
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error("useGetOne error:", err))
      .finally(() => setLoading(false));
  }, [url, token, dependency]);

  return { data, loading };
};
