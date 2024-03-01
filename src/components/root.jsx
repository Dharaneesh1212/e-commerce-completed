import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Content from "./content";
import Shop from "./shop";


const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
