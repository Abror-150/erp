import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
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
import { API } from "../../hooks/getEnv";

const MajorMore = () => {
  const { id } = useParams();
  const { token } = useContext(Context);
  const navigate = useNavigate();
  const [singleMajor, setSingleMajor] = useState<MajorType>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  function handleDelete() {
    setLoading(true);
    Delete(`/stacks/${id}`, token, setOpenModal, setLoading, navigate);
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
              {singleMajor?.name ? singleMajor?.name : "Loading..."}
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
            <Button className="w-[40px] h-[30px] " type="primary" size="middle">
              <EditOutlined />
            </Button>
          </div>
        </div>
        <div>
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
                src={`${API}/file/${singleMajor?.image}`}
                alt=""
                width={300}
                height={300}
              />
            </li>
          </ul>
        </div>
      </div>
      <Modal
        confirmLoading={loading}
        title="Ishonchinggiz komilmi?"
        open={openModal}
        okText="O'chirish"
        cancelText="Bekor qilish"
        onCancel={() => setOpenModal(false)}
        onOk={handleDelete}
      ></Modal>
    </div>
  );
};

export default MajorMore;
