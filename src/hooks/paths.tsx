import { Home } from "../pages/Auth";
import {
  Groups,
  Major,
  MajorCreate,
  Students,
  Teachers,
} from "../pages/Dashboard";
import {
  TeamOutlined,
  UngroupOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Notfound from "../pages/Dashboard/Notfound";
import { NavLink } from "react-router-dom";
import MajorMore from "../pages/Dashboard/MajorMore";
export const paths = {
  home: "/",
  signIn: "/signIn",
  major: "/major",
  groups: "/groups",
  students: "/students",
  teachers: "/teachers",
  majorMore: "/major/:id",
  majorCrud: "/major/create",
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
  {
    id: 7,
    path: paths.majorCrud,
    element: <MajorCreate />,
  },
  {
    id: 8,
    path: paths.majorMore,
    element: <MajorMore />,
  },
];
export const DashboardNavList = [
  {
    key: 1,
    label: <NavLink to={paths.major}>Yo'nalishlar</NavLink>,
    icon: <UnorderedListOutlined />,
  },
  {
    key: 2,
    label: <NavLink to={paths.groups}>Guruhlar</NavLink>,
    icon: <UngroupOutlined />,
  },
  {
    key: 3,
    label: <NavLink to={paths.students}>O'quvchilar</NavLink>,
    icon: <TeamOutlined />,
  },
  {
    key: 4,
    label: <NavLink to={paths.teachers}>Ustozlar</NavLink>,
    icon: <UserOutlined />,
  },
];
