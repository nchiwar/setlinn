import { Outlet } from "react-router-dom";
import NavigationBar from "@components/dashboard/NavigationBar.jsx";
import AppSidebarLayout from "@components/sidebar/AppSidebar";

function DashboardLayout() {
  return (
    <AppSidebarLayout>
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavigationBar />
    
        <main className="flex-1 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </AppSidebarLayout>
  );
}

export default DashboardLayout;
