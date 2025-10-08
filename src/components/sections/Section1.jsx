import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@components/ui/button";
import { Calendar } from "@components/ui/calendar";

function Section1() {
  const [date, setDate] = useState(null);

  return (
    <div>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-center">
        See Germany before you leave
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
        Explore both our physical and virtual campus tour and get a feel for
        your new home.
      </p>

      <div className="flex justify-center mb-6 space-x-4">
        <Link href="/tours" className="text-[#207681] hover:underline">
          Take a physical tour
        </Link>

        <Link
          href="/virtual-tour"
          className="text-[#207681] hover:underline ml-4"
        >
          Take a virtual tour
        </Link>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border shadow-md mb-6 mx-auto"
      />

      <div className="flex justify-center">
        <Button
          variant="primary"
          className="bg-[#207681] text-white hover:bg-[#1e5b68]"
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Section1;
