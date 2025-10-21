import Section1 from "@/components/sections/Section1";
import Hero from "@components/hero/Hero";
import Solutions from "@/components/sections/Solutions";

function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Solutions />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
        <Section1 />
      </div>
    </main>
  );
}

export default Home;
