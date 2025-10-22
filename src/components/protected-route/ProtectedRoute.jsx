import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

function ProtectedRoute() {
  const [session, setSession] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      // Get current session
      const { data } = await supabase.auth.getSession();
      const currentSession = data.session;
      setSession(currentSession);

      if (currentSession) {
        // Fetch user role from 'profiles' table
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", currentSession.user.id)
          .single();

        if (!error && profile) {
          setRole(profile.role);
        }
      }

      setLoading(false);
    };

    fetchUserData();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-600">
        Checking authentication...
      </div>
    );

  // Redirect if not authenticated
  if (!session) {
    return <Navigate to="/" replace state={{ showAuthModal: true }} />;
  }

  // If accessing admin route but not admin
  if (location.pathname.startsWith("/admin") && role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // Authenticated and authorized — render child routes
  return <Outlet />;
}

export default ProtectedRoute;

