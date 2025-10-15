import { Link } from "react-router-dom";

function Feed() {
  return (
    <div className="mx-auto max-w-7xl text-4xl font-bold p-4 flex justify-center items-center min-h-screen">
      Feed is under construction
      <Link to="/" className="text-blue-500 underline ml-2">
        Go Home
      </Link>
    </div>
  );
}

export default Feed;
