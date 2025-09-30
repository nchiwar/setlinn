import { Outlet } from "react-router-dom";

function HomeLayOut() {
  return (
    <div>
      {/* <nav>This is nav</nav> */}
      <Outlet />
      {/* <footer>This is the footer</footer> */}
    </div>
  );
}

export default HomeLayOut;
