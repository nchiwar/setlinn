import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

function SubscribeCard() {
  return (
    // Use a light shadow and padding
    <Card className="shadow-lg p-4 rounded-xl border border-gray-100">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-xl font-bold text-gray-900">
          Stay Updated
        </CardTitle>
        <p className="text-sm text-gray-600 mt-1">
          Subscribe to receive notifications, news and important updates
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <form className="space-y-4">
          {/* shadcn/ui Input component */}
          <Input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
          {/* shadcn/ui Button component with custom styling */}
          <Button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
export default SubscribeCard;
