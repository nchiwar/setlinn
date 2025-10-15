import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="">{/* <p>nav</p> */}</header>

      <main className="p-4 overflow-y-auto flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
