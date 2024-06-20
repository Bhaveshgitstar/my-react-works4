import { Outlet } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";

const Admin = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Admin;
