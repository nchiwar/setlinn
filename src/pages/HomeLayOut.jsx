import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavMenu from "@components/header/NavMenu";
import Footer from "@components/footer/Footer";

function HomeLayout() {
  const location = useLocation();
  const [triggerAuthModal, setTriggerAuthModal] = useState(null); // null | "signin" | "signup"

  useEffect(() => {
    // 👇 If redirected from ProtectedRoute, open Sign In modal automatically
    if (location.state?.showAuthModal) {
      setTriggerAuthModal("signin");
      window.history.replaceState({}, document.title); // clears the state
    }
  }, [location]);

  return (
    <div>
      <NavMenu triggerAuthModal={triggerAuthModal} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
