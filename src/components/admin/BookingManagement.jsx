import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Card } from "@components/ui/card";
import { Button } from "@components/ui/button";
import { Badge } from "@components/ui/badge";
// import { useToast } from "@/hooks/use-toast";

function BookingManagement() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const { toast } = useToast();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("tour_bookings")
      .select(
        `
        *,
        tour:campus_tours(title, institution),
        user:profiles(name, email)
      `
      )
      .order("created_at", { ascending: false });

    if (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to fetch bookings",
      //     variant: "destructive",
      //   });
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  };

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from("tour_bookings")
      .update({ status })
      .eq("id", id);

    if (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to update booking status",
      //     variant: "destructive",
      //   });
    } else {
      //   toast({
      //     title: "Success",
      //     description: `Booking ${status}`,
      //   });
      fetchBookings();
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading bookings...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Booking Management</h2>

      {bookings.length === 0 ? (
        <Card className="p-8 text-center text-muted-foreground">
          No bookings yet
        </Card>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {booking.tour?.title || "Unknown Tour"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {booking.tour?.institution}
                  </p>
                </div>
                <Badge
                  variant={
                    booking.status === "confirmed"
                      ? "default"
                      : booking.status === "cancelled"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {booking.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <p>
                  <span className="font-medium">Student:</span>{" "}
                  {booking.user?.name} ({booking.user?.email})
                </p>
                <p>
                  <span className="font-medium">Schedule:</span>{" "}
                  {new Date(booking.schedule_slot).toLocaleString()}
                </p>
                {booking.notes && (
                  <p>
                    <span className="font-medium">Notes:</span> {booking.notes}
                  </p>
                )}
              </div>

              {booking.status === "pending" && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => updateStatus(booking.id, "confirmed")}
                  >
                    Confirm
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => updateStatus(booking.id, "cancelled")}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingManagement;
