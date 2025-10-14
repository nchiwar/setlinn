import { Outlet } from "react-router-dom";
// import Navigation from "@components/header/Navigation";
import NavMenu from "@components/header/NavMenu";
import Footer from "@components/footer/Footer";

function HomeLayOut() {
  return (
    <div>
      <NavMenu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayOut;
