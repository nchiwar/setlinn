import { Button } from "@components/ui/button"; // Assuming shadcn/ui Button component

function BookTourButton() {
  return (
    <div className="mt-10 mb-16 flex justify-center">
      {/* shadcn/ui Button component with custom styling to match the image */}
      <Button
        className="bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold px-8 py-6 rounded-md shadow-lg transition duration-300"
        size="lg" // Use shadcn/ui size to give it a good padding
      >
        Book A Tour Now
      </Button>
    </div>
  );
}

export default BookTourButton;
