import {
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Context } from "../context/Context";
import { instance } from "../hooks/instance";
import { formatTime } from "../hooks/FormatTime";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { MoreOutlined } from "@ant-design/icons";

export const getRequest = (
  url: string,
  search: string,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  const [data, setData] = useState<any>([]);
  const { token } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    instance(url, {
      params: { name: search },
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      res.data.data.map((item: any) => {
        item.createdAt = formatTime(item.createdAt);
        item.key = item.id;
        item.key = item.id;
        item.action = (
          <Button
            onClick={() => navigate(`${item.id}`)}
            className="w-[25px] h-[25px]"
          >
            <MoreOutlined />
          </Button>
        );
        return item;
      });
      setData(res.data);
      setLoading(false);
    });
  }, [search]);

  return data;
};
