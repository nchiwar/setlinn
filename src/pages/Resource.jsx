import ArticleCard from "@components/resources/ArticleCard";
import SubscribeCard from "@components/resources/SubscribeCard";

// Sample data for the articles
const articles = [
  {
    title: "City Registration",
    description: "Complete your city registration efficiently",
  },
  {
    title: "Student Job Rules",
    description: "Understand the rules for Student Job",
  },
  {
    title: "Residence Permit",
    description: "Secure your residence permit with ease",
  },
  {
    title: "Learn German Language Guide",
    description: "Start learning German language with our guide",
  },
];

function Resource() {
  return (
    // Max width container and padding for responsiveness
    <div className="container mx-auto px-4 py-12 md:px-8 max-w-6xl">
      {/* Main Grid: Sets up the two-column layout on medium screens and up. 
          The grid uses a custom column ratio: 3 parts for content, 1 part for sidebar. */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-12">
        {/* Articles Content Area (Takes 3/4 of the width on desktop) */}
        <div className="md:col-span-3">
          {/* Article Cards Grid: Two-column layout that becomes single-column on small screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>
        </div>

        {/* Sidebar Area (Takes 1/4 of the width on desktop) */}
        <aside className="md:col-span-1 mt-12 md:mt-0">
          <SubscribeCard />
        </aside>
      </div>

      {/* Optional: Add space at the bottom to match the image spacing */}
      <div className="h-24"></div>
    </div>
  );
}

export default Resource;
