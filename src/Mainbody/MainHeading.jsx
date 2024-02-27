import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
function MainHeading() {
  return (
    <div>
      <p className="font-bold text-4xl my-3">Best Website builders in the US</p>
      <div className="flex flex-row flex-wrap justify-between text-slate-500 text-sm border-y-2 py-2 mx-1 gap-2 my-3">
        <div className="flex flex-row gap-3 items-center">
          <div>
            <FaRegCircleCheck />
          </div>
          <p>Last Updated </p>
          <span>—</span>
          <p>Febuary 22, 2020</p>
          <div className="flex flex-row items-center gap-[0.5vw]">
            <span>
              <IoIosInformationCircleOutline size="22px" />
            </span>
            <p>Advertising Discloser</p>
          </div>
        </div>
        <div>
          <select>
            <option>Top Relevant</option>
            <option>Newly Added</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {[
          "tools",
          "AWS builder",
          "start build",
          "build supplies",
          "tooling",
          "BlueHosting",
        ].map((item) => (
          <p
            key={item}
            className=" border-2  capitalize px-[6px] py-1 pr-4 rounded-lg bg-slate-100 font-semibold"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MainHeading;
