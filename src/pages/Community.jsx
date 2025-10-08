import BenefitCard from "@components/community/BenefitCard";
import FindCityForm from "@components/community/FindCityForm";

const communityBenefits = [
  {
    title: "Peer to Peer Q&A",
    description:
      "Get answers to your questions from fellow students and professionals.",
  },
  {
    title: "Mentor Access",
    description: "Connect with experienced mentors",
  },
  {
    title: "Job Access",
    description: "Discover and share Job opportunities",
  },
];

function Community() {
  return (
    // Max width container and generous padding
    <div className="container mx-auto px-4 py-16 md:px-8 max-w-6xl">
      {/* Header and Search Form */}
      <section className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Find Your City
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Connect with Fellow Student and Professionals in your city, Share
          experiences, ask questions and build your network
        </p>

        {/* City and Role Selects */}
        <FindCityForm />
      </section>

      {/* Community Benefits Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Community Benefits
        </h2>
        <p className="text-md text-gray-600 mb-12">
          Join a network of support to make your journey in Germany smoother.
        </p>

        {/* Benefits Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {communityBenefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Community;
