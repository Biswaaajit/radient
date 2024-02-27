import Item1 from "./MainItems/Item1";
import Item2 from "./MainItems/Item2";
import Item3 from "./MainItems/Item3";
import { IoDiamondOutline } from "react-icons/io5";
import { LuTrophy } from "react-icons/lu";
function MainContent() {
  return (
    <div className="flex flex-col gap-16 my-20">
      <div className=" bg-slate-100 relative py-12">
        <Item1>9.8</Item1>
        <div className="flex flex-row items-center bg-[#FF7724] w-fit px-2 py-1 gap-3 text-slate-200 z-20 absolute top-0 -translate-x-1/2 -translate-y-1/2 rounded-tr-md rounded-br-md">
          <span>
            <LuTrophy />
          </span>
          <span>Best Choice</span>
        </div>
        <div className="w-fit bg-slate-100 px-3 py-1 rounded-full border-slate-600/20 text-slate-700 border-2 absolute top-8 -translate-x-1/2">
          1
        </div>
      </div>
      <div className=" bg-slate-100 relative py-12">
        <Item2 />
        <div className="flex flex-row items-center bg-[#FF7724] w-fit px-2 py-1 gap-3 text-slate-200 z-20 absolute top-0 -translate-x-1/2 -translate-y-1/2 rounded-tr-md rounded-br-md">
          <span>
            <IoDiamondOutline />
          </span>
          <span>Best Choice</span>
        </div>
        <div className="w-fit px-3 py-1 rounded-full bg-slate-100 border-slate-600/20 text-slate-700 border-2 absolute top-8 -translate-x-1/2">
          2
        </div>
      </div>
      <div className=" bg-slate-100 relative py-12">
        <Item1>9.1</Item1>
        <div className="w-fit px-3 py-1 bg-slate-100 rounded-full border-slate-600/20 text-slate-700 border-2 absolute top-8 -translate-x-1/2">
          3
        </div>
      </div>
      <div className=" bg-slate-100 relative py-12">
        <Item3 />
        <div className="w-fit px-3 py-1 bg-slate-100 rounded-full border-slate-600/20 text-slate-700 border-2 absolute top-8 -translate-x-1/2">
          4
        </div>
      </div>
    </div>
  );
}

export default MainContent;
