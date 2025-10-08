import { Card, CardContent } from "@/components/ui/card"; // shadcn/ui Card

/**
 * @param {object} props
 * @param {string} props.title - The title of the benefit (e.g., "Peer to Peer Q&A")
 * @param {string} props.description - The descriptive text
 */

function BenefitCard({ title, description }) {
  return (
    // Card with a light border, full height (h-full), and subtle shadow
    <Card className="border border-gray-200 h-full p-6 rounded-xl shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="p-0">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

export default BenefitCard;
