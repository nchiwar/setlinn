import TourCard from "@components/campus-tour/TourCard";
import ResourceLink from "@components/campus-tour/ResourceLink";
import BookTourButton from "@components/campus-tour/BookTourButton";

function CampusTour() {
  return (
    // Max width container for desktop and padding for mobile
    <div className="container mx-auto px-4 py-12 md:px-8 max-w-6xl">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          See Germany Before You Leave It
        </h1>
        <p className="text-lg text-gray-600">
          Join our Campus Tours at Germany's top universities with large
          international student communities.
        </p>
      </header>

      {/* Placeholder for the large image/video block */}
      <div
        className="w-full h-48 bg-black mb-12 rounded-lg shadow-xl"
        aria-label="Placeholder for video or large image related to Germany and University Tours"
      >
        {/* In a real scenario, this would be an <img> or a video element */}
      </div>

      {/* Tour Options (Responsive Layout) */}
      <section className="flex flex-col md:flex-row gap-8 mb-16 justify-center">
        {/* Physical Tour Card */}
        <TourCard
          title="Physical Tour"
          description="Experience Campus firsthand with our on site tours in major German Cities, Berlin, Munich, Frankfurt, Cologne and Heidelberg."
        />

        {/* Virtual Tour Card */}
        <TourCard
          title="Virtual Tour"
          description="Join our live virtual tour, featuring Q&A sessions with current students and faculty."
        />
      </section>

      <hr className="my-8 border-gray-200" />

      {/* Downloadable Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
          Downloadable Resources
        </h2>

        {/* Tour Brochure */}
        <ResourceLink
          title="Downloadable Tour Brochure (PDF)"
          subtitle="Detailed information on our tour schedule, university and what to expect."
        />

        {/* Checklist */}
        <ResourceLink
          title="What to bring Checklist"
          subtitle="A handy checklist to ensure you're prepared for our physical tour."
        />
      </section>

      {/* Call to Action Button */}
      <BookTourButton />
    </div>
  );
}

export default CampusTour;
