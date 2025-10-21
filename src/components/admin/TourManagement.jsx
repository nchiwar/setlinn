import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { Plus, Pencil, Trash2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import TourForm from "./TourForm";

function TourManagement() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTour, setEditingTour] = useState(null);
  const [showForm, setShowForm] = useState(false);
  //   const { toast } = useToast();

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("campus_tours")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to fetch tours",
      //     variant: "destructive",
      //   });
    } else {
      setTours(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this tour?")) return;

    const { error } = await supabase.from("campus_tours").delete().eq("id", id);

    if (error) {
      //   toast({
      //     title: "Error",
      //     description: "Failed to delete tour",
      //     variant: "destructive",
      //   });
    } else {
      //   toast({
      //     title: "Success",
      //     description: "Tour deleted successfully",
      //   });
      fetchTours();
    }
  };

  const handleEdit = (tour) => {
    setEditingTour(tour);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingTour(null);
    fetchTours();
  };

  if (loading) {
    return <div className="text-center py-8">Loading tours...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Campus Tours</h2>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-[#207681] text-white"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Tour
        </Button>
      </div>

      {showForm && <TourForm tour={editingTour} onClose={handleFormClose} />}

      <div className="grid gap-4">
        {tours.map((tour) => (
          <Card key={tour.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-muted-foreground mb-2">{tour.institution}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  {tour.location}
                </p>
                <p className="text-sm line-clamp-2">{tour.description}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Capacity: {tour.capacity} | Schedules:{" "}
                  {tour.schedules?.length || 0}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleEdit(tour)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(tour.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TourManagement;
