import LoadCircle from "@components/LoadingCircle.jsx";

function Home() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div>
          <p className="text-2xl text-white bg-slate-400 p-3">
            Team Visionaries from Afriment building setlinn,{" "}
            <span className="italic font-bold text-amber-300">
              the world largest migration community platform.{" "}
            </span>
            <span className="mx-3 inline-block align-top">
              <LoadCircle size={10} iconSize={22} speed={7} items={8} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
