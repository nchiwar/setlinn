import { Card, CardContent } from "@components/ui/card";

/**
 * @param {object} props
 * @param {string} props.title - The title of the article
 * @param {string} props.description - The subtitle/description
 */

function ArticleCard({ title, description }) {
  return (
    // Card with no shadow to match the flat look in the image
    <Card className="border-none rounded-lg overflow-hidden">
      {/* Image Placeholder Block */}
      <div className="w-full aspect-video bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-500 mb-3 rounded-lg">
        Image
      </div>

      <CardContent className="p-0">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
