// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../lib/supabase";
// import { Button } from "@components/ui/button";
// import { Card } from "@components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Plus } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import TourManagement from "@components/admin/TourManagement";
import BookingManagement from "@components/admin/BookingManagement";

const AdminPanel = () => {
  //   const [loading, setLoading] = useState(true);
  //   const navigate = useNavigate();
  //   //   const { toast } = useToast();

  //   useEffect(() => {
  //     checkAdmin();
  //   }, []);

  //   const checkAdmin = async () => {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession();

  //     if (!session) {
  //       navigate("/auth?mode=signin");
  //       return;
  //     }

  //     // Check if user has admin role
  //     const { data: roles } = await supabase
  //       .from("user_roles")
  //       .select("role")
  //       .eq("user_id", session.user.id)
  //       .eq("role", "admin")
  //       .maybeSingle();

  //     if (!roles) {
  //       //   toast({
  //       //     title: "Access Denied",
  //       //     description: "You don't have permission to access the admin panel.",
  //       //     variant: "destructive",
  //       //   });
  //       navigate("/dashboard");
  //       return;
  //     }

  //     setLoading(false);
  //   };

  //   if (loading) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  //       </div>
  //     );
  //   }

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-background">
      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#207681]  mb-2">
            Admin Panel
          </h1>
          <p className="text-muted-foreground">
            Manage campus tours and bookings
          </p>
        </div>

        <Tabs defaultValue="tours" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tours">Campus Tours</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
          </TabsList>

          <TabsContent value="tours">
            <TourManagement />
          </TabsContent>

          <TabsContent value="bookings">
            <BookingManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPanel;
