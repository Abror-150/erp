import { Select } from "antd";
import type { ChangeEvent, FC } from "react";
import type { SelectType } from "../types/SelectType";

const CustomSelect: FC<SelectType> = ({
  options,
  extraClass,
  placeholder,
  value,
  setValue,
}) => {
  function onChange(e: ChangeEvent<HTMLSelectElement>) {
    setValue(e);
  }
  return (
    <Select
      onChange={onChange}
      value={value}
      className={`${extraClass}`}
      showSearch
      allowClear
      style={{ width: 200 }}
      placeholder={placeholder}
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={options}
    />
  );
};

export default CustomSelect;
