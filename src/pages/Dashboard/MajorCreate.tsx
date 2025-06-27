import toast, { Toaster } from "react-hot-toast";
import CreateCaption from "../../components/CreateCaption";
import { Input } from "antd";
import { useContext, useState } from "react";
import { instance } from "../../hooks/instance";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import UploadImg from "../../components/UploadImg";
import type { UploadType } from "../../types/UploadType";

const MajorCreate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const { token } = useContext(Context);
  const [image, setImage] = useState<UploadType | any>();
  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = { image: image, filename: name };
    instance
      .post("/stacks", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("yaratildi");
        setLoading(false);
        setTimeout(() => navigate(-1), 600);
      })
      .catch(() => {
        setLoading(false);
        toast.error("xatolik bor");
      });
  }
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleCreate} autoComplete="off" className="p-5">
        <div className=" bg-white p-5 rounded-md">
          <CreateCaption loading={loading} title="Yo'nalish qo'shish" />
          <div className="mt-[30px]">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Yo'nalish nomini kiriting"
              allowClear
              className="mb-5 w-[60%] "
              size="large"
            />
            <UploadImg setImage={setImage} />
          </div>
        </div>
      </form>
    </>
  );
};

export default MajorCreate;
