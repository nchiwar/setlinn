import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@components/ui/sidebar";
import { Separator } from "@components/ui/separator";
import { Button } from "@components/ui/button";
import {
  Home,
  Globe,
  Map,
  Flag,
  Mail,
  User,
  LogOut,
} from "lucide-react";
import Logo from "@components/header/Logo"
import supabase from "../../lib/supabase";

const menuItems = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/dashboard/resource", label: "Explore", icon: Globe },
  { to: "/dashboard/campus-tour", label: "Campus Tour", icon: Map },
  { to: "/dashboard/city-hubs", label: "City Hubs", icon: Flag },
  { to: "/dashboard/messages", label: "Messages", icon: Mail },
  { to: "/dashboard/profile", label: "Profile", icon: User },
];

export default function AppSidebarLayout({ children }) {
  const location = useLocation();

    const navigate = useNavigate();
    const handleSignOut = async () => {
      await supabase.auth.signOut();
      navigate("/");
    };
  

  return (
    <SidebarProvider>
      {/* Sidebar Component */}
      <Sidebar collapsible="offcanvas" side="left" className="border-r">
        <SidebarHeader className="px-4 py-4">
            <div className="flex flex-row items-center space-x-3 mb-6 px-2">
                <Logo />
                <span className="text-2xl font-semibold text-[#207681]">
                    Setlinn
                </span>
            </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu className="px-2 space-y-1">
            {menuItems.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to;
              return (
                <SidebarMenuItem key={to}>
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-teal-700 text-white"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    <Link to={to}>
                      <Icon size={18} />
                      <span>{label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="px-4 py-3">
          <Separator className="mb-3" />
          <Button
            variant="ghost"
            className="text-red-500 hover:text-red-600 flex items-center gap-2 cursor-pointer"
            onClick={handleSignOut}
          >
            <LogOut size={18} />
            Log Out
          </Button>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50  min-h-screen">
        <div className="absolute top-4  z-20">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
