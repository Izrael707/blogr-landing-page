import Navbar from "./Navbar";

function Header() {
  return (
    <div
      id="header-section"
      className="pb-32 xl:pb-40 px-2 lg:px-4 xl:px-8 bg-red-400 text-white"
    >
      <Navbar />
      <div className="pt-24 xl:pt-28">
        <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl text-center px-8 xl:px-12">
          A modern publishing platform
        </h1>
        <p className="text-center text-xl px-8 py-4 text-gray-100 xl:text-xl">
          Grow your audience and build your online brand
        </p>
        <div className="flex justify-center gap-4 pt-8">
          <button className="py-2 px-4 xl:py-3 xl:px-6 xl:text-xl text-red-600 bg-white font-semibold rounded-full hover:bg-red-300 hover:text-white">
            Start for Free
          </button>
          <button className="py-2 px-4 xl:py-3 xl:px-6 xl:text-xl bg-transparent border border-white rounded-full font-semibold hover:bg-white hover:text-red-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
