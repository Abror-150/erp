import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { instance } from "../hooks/instance";
import { formatTime } from "../hooks/FormatTime";
import { Button, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckOutlined, CloseOutlined, MoreOutlined } from "@ant-design/icons";

export const getGroup = (url: string, stackId: undefined | string) => {
  const [data, setData] = useState<any>([]);
  const { token } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    instance(url, {
      params: { stackId },
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      res.data.data.map((item: any) => {
        item.createdAt = formatTime(item.createdAt);
        item.key = item.id;
        item.roomName = item.room.name;
        item.status = item.status? <Button className="!bg-green-500 !rounded-2xl !p-3 " size="small">faol</Button> :<Button className="!bg-red-500 !rounded-2xl !p-3 " size="small">faol emas</Button>
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
      setData(res.data.data);
    });
  }, []);

  return data;
};
