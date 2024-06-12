import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar2 from "./components/Header/Navbar2";
import BrowseCocktail from "./views/Browse-Alphabet/BrowseCocktail";
import BrowseCard from "./components/BrowseCard/BrowseCard";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar2></Navbar2>
      {/* <Spinner></Spinner> */}
      <Outlet></Outlet>
      <BrowseCard></BrowseCard>
      <Footer></Footer>
    </>
  );
}

export default App;
