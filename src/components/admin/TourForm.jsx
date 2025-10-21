import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { X, Plus, Trash2 } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

function TourForm({ tour, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    institution: "",
    location: "",
    description: "",
    capacity: 20,
    media_urls: [],
  });

  const [schedules, setSchedules] = useState([{ date: "", time: "" }]);
  const [loading, setLoading] = useState(false);
  //   const { toast } = useToast();

  useEffect(() => {
    if (tour) {
      setFormData({
        title: tour.title || "",
        institution: tour.institution || "",
        location: tour.location || "",
        description: tour.description || "",
        capacity: tour.capacity || 20,
        media_urls: tour.media_urls || [],
      });
      setSchedules(tour.schedules || [{ date: "", time: "" }]);
    }
  }, [tour]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const tourData = {
      ...formData,
      schedules: schedules.filter((s) => s.date && s.time),
    };

    let error;
    if (tour) {
      const result = await supabase
        .from("campus_tours")
        .update(tourData)
        .eq("id", tour.id);
      error = result.error;
    } else {
      const result = await supabase.from("campus_tours").insert([tourData]);
      error = result.error;
    }

    setLoading(false);

    if (error) {
      //   toast({
      //     title: "Error",
      //     description: error.message,
      //     variant: "destructive",
      //   });
    } else {
      //   toast({
      //     title: "Success",
      //     description: `Tour ${tour ? "updated" : "created"} successfully`,
      //   });
      onClose();
    }
  };

  const addSchedule = () => {
    setSchedules([...schedules, { date: "", time: "" }]);
  };

  const removeSchedule = (index) => {
    setSchedules(schedules.filter((_, i) => i !== index));
  };

  const updateSchedule = (index, field, value) => {
    const updated = [...schedules];
    updated[index] = { ...updated[index], [field]: value };
    setSchedules(updated);
  };

  return (
    <Card className="p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">
          {tour ? "Edit Tour" : "Create New Tour"}
        </h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Tour Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="institution">Institution</Label>
          <Input
            id="institution"
            value={formData.institution}
            onChange={(e) =>
              setFormData({ ...formData, institution: e.target.value })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows={4}
            required
          />
        </div>

        <div>
          <Label htmlFor="capacity">Capacity</Label>
          <Input
            id="capacity"
            type="number"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({ ...formData, capacity: parseInt(e.target.value) })
            }
            min={1}
            required
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <Label>Schedules</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addSchedule}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Schedule
            </Button>
          </div>
          {schedules.map((schedule, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                type="date"
                value={schedule.date}
                onChange={(e) => updateSchedule(index, "date", e.target.value)}
                required
              />
              <Input
                type="time"
                value={schedule.time}
                onChange={(e) => updateSchedule(index, "time", e.target.value)}
                required
              />
              {schedules.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSchedule(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-4">
          <Button type="submit" disabled={loading}>
            {loading ? "Saving..." : tour ? "Update Tour" : "Create Tour"}
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default TourForm;
