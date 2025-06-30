import React, { useState } from "react";
import CreateCaption from "../../components/CreateCaption";
import { Input, Select } from "antd";
import CustomSelect from "../../components/CustomSelect";

const GroupCreate = () => {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [stackId, setStackId] = useState<number | null>(null);
  return (
    <div className="p-5">
      <div className="bg-white p-5 rounded-md">
        <CreateCaption title="Guruh qo'shish" loading={loading} />
        <div className="flex justify-between">
          <div className="w-[49%]">
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full"
              placeholder="Guruh nomi"
              size="large"
            />
            <CustomSelect
              options={[]}
              placeholder="Yo'nalishni tanlang"
              setValue={setStackId}
              value={stackId}
            />
          </div>
          <div className="w-[49%]"></div>
        </div>
      </div>
    </div>
  );
};

export default GroupCreate;
