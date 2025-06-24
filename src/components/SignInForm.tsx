import React, { useContext, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Context } from "../context/Context";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface ValueType {
  username: string;
  password: string;
}

const SignForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const { setToken } = useContext(Context);

  const onFinish = (values: ValueType) => {
    setIsLoading(true);
    axios.get("http://localhost:3000/users").then((data) => {
      const isUser = data.data.some(
        (item: ValueType) =>
          item.username == values.username && item.password == values.password
      );
      setTimeout(() => {
        if (isUser) {
          setTimeout(() => {
            setToken(true);
            location.pathname = "/";
          }, 1000);
        } else {
          toast.error("foydalanuvchi topilmadi");
        }
        setIsLoading(false);
      }, 1000);
    });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Form
        autoComplete="off"
        name="login"
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            allowClear
            size="large"
            prefix={<UserOutlined />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            allowClear
            size="large"
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              className="text-[var(--clr-gold)] border-[var(--clr-gold)] hover:bg-[var(--clr-gold)] hover:text-white"
              loading={isLoading}
              size="large"
              type="primary"
              htmlType="submit"
              block
            >
              Kirish
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default SignForm;
