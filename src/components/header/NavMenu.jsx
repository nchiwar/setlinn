import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import Logo from "./Logo";
import supabase from "../../lib/supabase";
import AuthModal from "../auth/AuthModal";
import { LogOutIcon } from "../icons/Icons";

const NavigationLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/campus-tour", label: "Campus Tour" },
  { to: "/resource", label: "Resource" },
  { to: "/community", label: "Community" },
];

function NavMenu({ triggerAuthModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      setSession(session)
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // refresh session state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  };

  useEffect(() => {
    if (triggerAuthModal) {
      setAuthMode(triggerAuthModal);
      setShowAuthModal(true);
    }
  }, [triggerAuthModal]);

  const NavLinkComponent = ({ to, label, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `font-medium text-[16px] p-2 rounded-lg transition-colors ${
          isActive
            ? "text-teal-700 bg-teal-50"
            : "text-gray-600 hover:text-teal-700"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="border-b bg-white sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:space-x-8 items-center">
          {NavigationLinks.map((link) => (
            <NavLinkComponent key={link.label} {...link} />
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* <Button
            variant="primary"
            className="bg-[#207681] text-white cursor-pointer"
          >
            Join the waitlist
          </Button> */}

          {session ? (
            <>
              <Button
                variant="outline"
                className="text-[#207681] border-[#207681] cursor-pointer"
                onClick={() => navigate("/feed")}
              >
                Feed
              </Button>
              <Button
                onClick={handleSignOut}
                variant="destructive"
                className="cursor-pointer"
              >
                <LogOutIcon className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="text-[#207681] border-[#207681] cursor-pointer"
                onClick={() => {
                  setAuthMode("signin");
                  setShowAuthModal(true);
                }}
              >
                Sign In
              </Button>
              <Button
                className="bg-[#207681] text-white cursor-pointer"
                onClick={() => {
                  setAuthMode("signup");
                  setShowAuthModal(true);
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center space-x-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger aria-label="Open menu">
              <Menu className="h-6 w-6 text-gray-800 cursor-pointer" />
            </SheetTrigger>

            <SheetContent side="right" className="pt-10">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-3 mb-6 px-2">
                  <Logo />
                  <span className="text-2xl font-semibold text-[#207681]">
                    Setlinn
                  </span>
                </div>

                {NavigationLinks.map((link) => (
                  <NavLinkComponent
                    key={link.label}
                    {...link}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}

                <div className="mt-6 pt-4 border-t space-y-3">
                  {/* <Button
                    variant="primary"
                    className="w-full justify-center bg-[#207681] text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join the waitlist
                  </Button> */}

                  {session ? (
                    <>
                      <Button
                        variant="outline"
                        className="w-full text-[#207681] border-[#207681] cursor-pointer"
                        onClick={() => {
                          navigate("/feed");
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Feed
                      </Button>
                      <Button
                        onClick={handleSignOut}
                        variant="destructive"
                        className="w-full cursor-pointer"
                      >
                        <LogOutIcon className="w-4 h-4 mr-2" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="w-full text-[#207681] border-[#207681] cursor-pointer"
                        onClick={() => {
                          setAuthMode("signin");
                          setShowAuthModal(true);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Sign In
                      </Button>
                      <Button
                        className="w-full bg-[#207681] text-white cursor-pointer"
                        onClick={() => {
                          setAuthMode("signup");
                          setShowAuthModal(true);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Auth Modal Section */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={handleAuthSuccess}
          defaultMode={authMode}
        />
      )}
    </nav>
  );
}

export default NavMenu;
