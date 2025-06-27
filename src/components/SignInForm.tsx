import React, { useContext, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Context } from "../context/Context";
import { Toaster } from "react-hot-toast";
import { Login } from "../services/auth";

interface ValueType {
  username: string;
  password: string;
}

const SignForm: React.FC = () => {
  const { setToken } = useContext(Context);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  const onFinish = (values: ValueType) => {
    setIsLoading(true);
    Login(values, setIsLoading, setToken);
  };
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length >= 8) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

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
            onChange={handlePasswordChange}
            minLength={8}
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
              disabled={disable}
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
