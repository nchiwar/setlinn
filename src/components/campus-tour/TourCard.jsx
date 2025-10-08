import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

/**
 * @param {object} props
 * @param {string} props.title - The title of the tour (e.g., "Physical Tour")
 * @param {string} props.description - The main text description
 */
function TourCard({ title, description }) {
  return (
    // Use flex-1 min-w-[300px] and max-w-full on sm:max-w-[450px] for responsiveness.
    // md:flex-1 ensures they share space equally on larger screens.
    <Card className="flex-1 min-w-[300px] sm:max-w-[450px] md:max-w-none shadow-lg border-t-4 border-blue-600">
      <CardHeader>
        {/* Use a larger font for the title */}
        <CardTitle className="text-2xl font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default TourCard;
