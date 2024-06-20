import { Outlet } from "react-router-dom";
import Sidebar from "../../component/Sidebar/AdminSidebar";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Admin;
