import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const CreateCaption = ({
  title,
  loading,
}: {
  title: string;
  loading: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div>
        <button onClick={() => navigate(-1)}>
          <ArrowLeftOutlined className="text-[25px]" />
        </button>

        <h2 className="text-[22px]">{title}</h2>
      </div>
      <Button
        loading={loading}
        htmlType="submit"
        icon={<SaveOutlined />}
        className="cursor-pointer hover:scale-[1.2] duration-300"
        size="large"
        type="primary"
      >
        Saqlash
      </Button>
    </div>
  );
};

export default CreateCaption;
