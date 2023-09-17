import { HiBars3 } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="flex items-center justify-between lg:justify-normal py-2 xl:py-4">
      <h1 className="font-semibold text-4xl xl:text-5xl cursor-pointer">
        Blogr
      </h1>
      <HiBars3 className="font-semibold text-4xl cursor-pointer lg:hidden" />
      <div className="hidden lg:flex justify-between grow pt-2">
        <div className="flex items-center pl-8 gap-8">
          <p className=" cursor-pointer xl:text-xl">Product</p>
          <p className=" cursor-pointer xl:text-xl">Company</p>
          <p className=" cursor-pointer xl:text-xl">Connect</p>
        </div>
        <div className="flex justify-center gap-4">
          <button className="py-2 px-6 xl:py-3 xl:px-8 xl:text-xl text-white bg-transparent font-semibold rounded-full ">
            Login
          </button>
          <button className="py-2 px-6 xl:py-3 xl:px-8 xl:text-xl bg-white text-red-600 rounded-full font-semibold hover:bg-red-300 hover:text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
