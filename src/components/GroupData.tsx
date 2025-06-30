import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import CustomTable from "./CustomTable";
import { getGroup } from "../services/getGroup";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const GroupData: FC<{ id?: string | undefined }> = ({ id }) => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Nomi",
      dataIndex: "name",
    },
    {
      title: "Dars xonasi",
      dataIndex: "roomName",
    },
    {
      title: "Yaratilgan vaqt",
      dataIndex: "createdAt",
    },
    {
      title: "xolati",
      dataIndex: "status",
    },
    {
      title: "Batafsil",
      dataIndex: "action",
    },
  ];
  const groups = getGroup("/groups", id);

  return (
    <div className=" p-5 bg-white rounded-md mt-5">
      {id ? (
        <div className="pb-3 flex items-center justify-between">
          <h1 className="font-bold text-[20px]">Guruhlar</h1>
          <Button
            onClick={() => navigate("create-group")}
            icon={<PlusOutlined />}
            size="middle"
            type="primary"
          >
            Qo'shish
          </Button>
        </div>
      ) : (
        ""
      )}

      <CustomTable columns={columns} data={groups} />
    </div>
  );
};

export default GroupData;
