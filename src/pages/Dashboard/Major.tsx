import { PlusOutlined } from "@ant-design/icons";
import Caption from "../../components/Caption";
import { getRequest } from "../../services/getRequest";

const Major = () => {
  const majorList = getRequest("/stacks");
  return (
    <div className="p-5">
      <div className="p-5 bg-white rounded-md">
        <Caption
          title="Yo'nalishlar"
          count={majorList?.total ? majorList?.total : 0}
          icon={<PlusOutlined />}
        />
      </div>
    </div>
  );
};

export default Major;
