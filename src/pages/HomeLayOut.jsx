import { Outlet } from "react-router-dom";
// import Navigation from "@components/header/Navigation";
import NavMenu from "@components/header/NavMenu";

function HomeLayOut() {
  return (
    <div>
      <NavMenu />
      <Outlet />
      {/* <footer>This is the footer</footer> */}
    </div>
  );
}

export default HomeLayOut;
