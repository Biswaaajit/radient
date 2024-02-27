import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="w-full bg-[#212731] flex flex-row justify-between flex-wrap text-slate-400 md:justify-center md:gap-12 items-center py-3 px-3 sm:px-0 sm:justify-around transition-all">
        <form className="flex flex-row w-fit items-center">
          <label className="bg-white px-1 py-1 rounded-tl-lg rounded-bl-lg">
            <CiSearch color="#212731" size="24px" />
          </label>
          <input
            type="text"
            className="w-fit md:w-[350px] sm:w-[200px] transition-all py-1 rounded-tr-lg rounded-br-lg focus:outline-none text-slate-700"
          />
        </form>
        <div className="block sm:hidden mr-2" onClick={() => setNav(!nav)}>
          <FaGripLines />
        </div>
        <div className="hidden sm:flex flex-row gap-4 capitalize">
          <p>categories</p>
          <p>website builder</p>
          <p>Today&apos;s deal</p>
        </div>
      </div>
      {nav && (
        <div className="w-full bg-[#212731] px-3 text-slate-400 py-2 divide-y-2 divide-slate-600/50 capitalize">
          <p className="px-2 py-3">Categories</p>
          <p className="px-2 py-3">Website Builder</p>
          <p className="px-2 py-3">Today&apos;s Deal</p>
        </div>
      )}
    </>
  );
}

export default Navbar;
