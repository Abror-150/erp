import { Home } from "../pages/Auth";
import { Groups, Major, Students, Teachers } from "../pages/Dashboard";
import {
  TeamOutlined,
  UngroupOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Notfound from "../pages/Dashboard/Notfound";
export const paths = {
  home: "/",
  signIn: "/signIn",
  major: "/major",
  groups: "/groups",
  students: "/students",
  teachers: "/teachers",
  notFound: "*",
};

export const DashboardRouteLists = [
  {
    id: 1,
    path: paths.home,
    element: <Home />,
  },
  {
    id: 2,
    path: paths.major,
    element: <Major />,
  },
  {
    id: 3,
    path: paths.groups,
    element: <Groups />,
  },
  {
    id: 4,
    path: paths.students,
    element: <Students />,
  },
  {
    id: 5,
    path: paths.teachers,
    element: <Teachers />,
  },
  {
    id: 6,
    path: paths.notFound,
    element: <Notfound />,
  },
];
export const DashboardNavList = [
  {
    id: 1,
    title: "Yo'nalishlar",
    icon: <UnorderedListOutlined />,
  },
  {
    id: 1,
    title: "Guruhlar",
    icon: <UngroupOutlined />,
  },
  {
    id: 1,
    title: "O'quvchilar",
    icon: <TeamOutlined />,
  },
  {
    id: 1,
    title: "O'qituvchilar",
    icon: <UserOutlined />,
  },
];
