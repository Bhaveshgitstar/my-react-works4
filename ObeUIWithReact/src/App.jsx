import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./component/Sidebar/AdminSidebar";
import "boxicons/css/boxicons.min.css";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  );
}

export default App;
