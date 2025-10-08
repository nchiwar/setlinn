import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import Logo from "./Logo";

const NavigationLinks = [
  { to: "/", label: "Home" }, // Use 'to' instead of 'href' for NavLink
  { to: "/services", label: "Services" },
  { to: "/campus-tour", label: "Campus Tour" },
  { to: "/resource", label: "Resource" },
  { to: "/community", label: "Community" },
];

function NavMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinkComponent = ({ to, label, onClick }) => (
    <NavLink
      to={to} // NavLink uses 'to' for the destination path
      onClick={onClick}
      className={({ isActive }) =>
        // isActive is a function property provided by NavLink
        `font-medium text-[16px] p-2 rounded-lg transition-colors ${
          isActive
            ? "text-teal-700 bg-teal-50" // Styles for the active link
            : "text-gray-600 hover:text-teal-700" // Styles for inactive links
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="border-b bg-white sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* 1. Logo */}
        <div className="flex-shrink-0">
          <span className="">
            <Logo />
          </span>
        </div>

        {/* 2. Desktop Navigation Links (Hidden on small screens) */}
        <div className="hidden lg:flex lg:space-x-8 items-center">
          {NavigationLinks.map((link) => (
            <NavLinkComponent key={link.label} {...link} />
          ))}
        </div>

        {/* 3. Desktop Action Buttons (Hidden on small screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="primary"
            className="bg-[#207681] text-white cursor-pointer"
          >
            Join the waitlist
          </Button>
          <Button
            variant="outline"
            className="text-[#207681] border-[#207681] cursor-pointer"
          >
            Login
          </Button>
        </div>

        {/* 4. Mobile Menu & Actions (Visible on small screens) */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* The Login button is kept visible on mobile for quick access */}
          <Button
            variant="outline"
            className="text-sm h-9 px-3 text-[#207681] border-[#207681] cursor-pointer"
          >
            Login
          </Button>

          {/* Shadcn SheetTrigger */}
          <Sheet>
            <SheetTrigger onClick={toggleMenu} aria-label="Open menu">
              <Menu className="h-6 w-6 text-gray-800 cursor-pointer" />
            </SheetTrigger>

            {/* Shadcn SheetContent */}
            <SheetContent
              isOpen={isMobileMenuOpen}
              onClose={toggleMenu}
              side="right"
              className="pt-10"
            >
              <div className="flex flex-col space-y-4">
                {/* <h4 className="text-lg font-semibold border-b pb-2 mb-2">
                  Navigation
                </h4> */}
                <div className="flex flex-row items-center space-x-3 mb-6 px-2">
                  <Logo />
                  <span className="text-2xl font-semibold text-[#207681]">
                    Setlinn
                  </span>
                </div>

                {/* Mobile Links */}
                {NavigationLinks.map((link) => (
                  <NavLinkComponent
                    key={link.label}
                    {...link}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}

                {/* Mobile 'Join the waitlist' Button */}
                <div className="mt-6 pt-4 border-t">
                  <Button
                    variant="primary"
                    className="w-full justify-center bg-[#207681] text-white cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join the waitlist
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
