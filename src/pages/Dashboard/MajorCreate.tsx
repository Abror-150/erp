import toast, { Toaster } from "react-hot-toast";
import CreateCaption from "../../components/CreateCaption";
import { Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { instance } from "../../hooks/instance";
import { Context } from "../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import UploadImg from "../../components/UploadImg";
import type { UploadType } from "../../types/UploadType";
import type { MajorType } from "../../types/MajorType";
import { API } from "../../hooks/getEnv";
import type { UpdateDataImage } from "../../types/UpdateDataImage";

const MajorCreate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const { token } = useContext(Context);
  const { id } = useParams();
  const [updateData, setUpdateData] = useState<MajorType | {}>({});

  const [image, setImage] = useState<UploadType | any>();
  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const data = { image, name };
    if (id) {
      instance
        .patch(`/stacks/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          toast.success("o'zgartirildi");
          setLoading(false);
          setTimeout(() => navigate(-1), 600);
        })
        .catch((err) => {
          setLoading(false);
          toast.error("xatolik bor");
          console.log(err.response?.data || err.message);
        });
    } else {
      instance
        .post("/stacks", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          toast.success("yaratildi");
          setLoading(false);
          setTimeout(() => navigate(-1), 600);
        })
        .catch((err) => {
          setLoading(false);
          toast.error("xatolik bor");
          console.log(err.response?.data || err.message);
        });
    }
  }

  useEffect(() => {
    if (id) {
      instance(`/stacks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        const type =
          res.data.image.split(".")[res.data.image.split(".").length - 1];

        const data: UpdateDataImage = {
          uid: "-1",
          name: `image.${type}`,
          status: "done",
          url: `${API}/file${res.data.image}`,
        };
        setUpdateData(data);
        setName(res.data.name);
      });
    }
  }, []);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={handleCreate} autoComplete="off" className="p-5">
        <div className=" bg-white p-5 rounded-md">
          <CreateCaption
            loading={loading}
            title={id ? "Yo'nalish tahrirlash" : "Yo'nalish qo'shish"}
          />
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
            <UploadImg setImage={setImage} updateData={updateData} />
          </div>
        </div>
      </form>
    </>
  );
};

export default MajorCreate;
