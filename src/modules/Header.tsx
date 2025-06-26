import {
  BellOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Badge, Button, Modal } from "antd";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { useCookies } from "react-cookie";

const Header = () => {
  const { showNavbar, setShowNavbar, setToken } = useContext(Context);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [_cookie, _setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setIsLoading] = useState<boolean>(false);

  function LogOut(): void {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToken(null);
      removeCookie("token");
      location.pathname = "/";
    }, 1000);
  }
  return (
    <>
      <div className="bg-[#031529] p-3 border-b-[0.5px] border-slate-600 flex items-center justify-between  ">
        <button
          onClick={() => setShowNavbar(!showNavbar)}
          className="text-white cursor-pointer"
        >
          {showNavbar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
        <div className="flex items-center  gap-[5px] ">
          <Badge size="small" count={99} overflowCount={9}>
            <Button size="small" className="w-[35px] h-[35px]" type="default">
              <BellOutlined />
            </Button>
          </Badge>
          <Button
            onClick={() => setShowModal(true)}
            icon={<LogoutOutlined />}
            iconPosition="end"
            type="text"
            className="!text-white"
          >
            chiqish
          </Button>
        </div>
      </div>
      <Modal
        confirmLoading={loading}
        okText="Chiqish"
        cancelText="Bekor qilish"
        open={showModal}
        onOk={() => LogOut()}
        onCancel={() => setShowModal(false)}
        title="Tizimdan chiqish"
      ></Modal>
    </>
  );
};

export default Header;
