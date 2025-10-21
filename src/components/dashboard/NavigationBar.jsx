import { Search } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Bell, User } from "lucide-react";

const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-white w-full pb-3">
      {/* Container with padding and flex layout */}
      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        
        {/* 2. Search Bar (Takes up center space, hides on very small screens if needed) */}
        <div className="flex-1 max-w-lg mx-4 hidden sm:flex">
          {/* Using the shadcn Input component */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Search Settlinn"
              className="pl-10 h-10 w-full rounded-md border border-gray-300 focus:ring-0"
            />
          </div>
        </div>

        {/* 3. Action Icons (Bell and User) */}
        <div className="flex items-center space-x-2">
          {/* Bell Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-9 w-9 text-gray-600 hover:bg-gray-100"
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          {/* User Avatar Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-9 w-9 text-gray-600 hover:bg-gray-100"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">User Profile</span>
          </Button>

          {/* Optional: Mobile Search Button (Visible only on small screens) */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden rounded-full h-9 w-9 text-gray-600 hover:bg-gray-100"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
      
      
    </header>
  );
};

export default NavigationBar;