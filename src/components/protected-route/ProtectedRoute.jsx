import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

function ProtectedRoute() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

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

  // Redirect unauthenticated users
  if (!session) {
    return <Navigate to="/" replace state={{ showAuthModal: true }} />;
  }

  // Render child route if authenticated
  return <Outlet />;
}

export default ProtectedRoute;
