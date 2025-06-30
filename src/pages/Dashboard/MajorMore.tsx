import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import type { MajorType } from "../../types/MajorType";
import { Button, Modal } from "antd";
import { Delete } from "../../services/Actions";
import MoreItem from "../../components/MoreItem";
import { formatTime } from "../../hooks/FormatTime";
import { useGetOne } from "../../hooks/useGetOne";
import { Context } from "../../context/Context";
import GroupData from "../../components/GroupData";

const MajorMore = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useContext(Context);

  const { data: singleMajor, loading } = useGetOne<MajorType>(
    `/stacks/${id}`,
    id
  );

  console.log(singleMajor?.image);

  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = React.useState(false);

  function handleDelete() {
    setDeleteLoading(true);
    Delete(
      `/stacks/${id}`,
      token,

      setOpenModal,
      setDeleteLoading,
      navigate
    );
  }

  return (
    <div className="p-5">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="p-5 bg-white rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <button>
              <ArrowLeftOutlined
                className="cursor-pointer"
                onClick={() => navigate(-1)}
              />
            </button>
            <h2 className="text-[22px] font-semibold">
              {loading ? "Yuklanmoqda..." : singleMajor?.name}
            </h2>
          </div>
          <div className="flex items-center gap-[10px]">
            <Button
              onClick={() => setOpenModal(true)}
              className="w-[40px] h-[30px] !bg-red-600"
              type="primary"
              size="middle"
            >
              <DeleteOutlined />
            </Button>
            <Button
              onClick={() => navigate("edit")}
              className="w-[40px] h-[30px] "
              type="primary"
              size="middle"
            >
              <EditOutlined />
            </Button>
          </div>
        </div>
        <div className="flex gap-[20px] mt-[30px]">
          <ul className="w-[48%] space-y-[10px] p-3 rounded-md border-[1px] border-slate-400">
            <MoreItem label="#ID" title={singleMajor?.id} />
            <MoreItem label="Nomi" title={singleMajor?.name} />
            <MoreItem
              label="Yaratilgan vaqt"
              title={formatTime(singleMajor?.createdAt)}
            />
          </ul>
          <ul className="w-[48%] p-3 rounded-md border-[1px] border-slate-400">
            <li>
              <img
                className="object-contain h-[200px]"
                src={singleMajor?.image}
                alt=""
                width={300}
                height={300}
              />
            </li>
          </ul>
        </div>
      </div>
      <GroupData id={id} />

      <Modal
        confirmLoading={deleteLoading}
        title="Ishonchinggiz komilmi?"
        open={openModal}
        okText="O'chirish"
        cancelText="Bekor qilish"
        onCancel={() => setOpenModal(false)}
        onOk={handleDelete}
      />
    </div>
  );
};

export default MajorMore;
