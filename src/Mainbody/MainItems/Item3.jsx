import { FaStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import Button from "../../components/Button";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
function Item3() {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap text-slate-600 gap-5">
      <div className="flex flex-col justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
          alt="img"
          className="w-[18rem] md:w-48"
        />
        <p className="text-center">Builder 1</p>
      </div>
      {/* middle part */}
      <div className="flex-grow space-y-3">
        <p>
          <span className="font-semibold text-slate-800">
            CDK Resposive Builde{" "}
          </span>
          : An extensive library of widgets and apps, and detailed step-by-step
          guides
        </p>
        <p className="bg-blue-200/50 w-fit font-semibold text-[#074786] px-2 py-1">
          26% off
        </p>
        <div className="w-full overflow-hidden">
          <p className="font-semibold text-slate-800 mb-2">Main highlights</p>
          <div className="bg-red-200/50 w-[100%] ml-4 px-3 py-2 space-y-2 ">
            <p>
              <span className="text-[#1B88F4] bg-slate-100 px-1 py-0.5 mr-2">
                9.9
              </span>
              Building Responsive
            </p>
            <p>
              <span className="text-[#1B88F4] bg-slate-100 px-1 py-0.5 mr-2">
                8.9
              </span>
              Cool
            </p>
            <p>
              <span className="text-[#1B88F4] bg-slate-100 px-1 py-0.5 mr-2">
                8.9
              </span>
              Docs
            </p>
          </div>
        </div>
        <div>
          <p className="mb-2">Why we love it</p>
          <div>
            {["documentation", "easy use", "out of box"].map((item) => (
              <div key={item} className="flex flex-row">
                <span className="self-center mr-2 bg-teal-200/45 p-1 rounded-full">
                  <IoMdCheckmark color="#0855A1" />
                </span>
                <span className="capitalize">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-[#1B88F4] flex flex-row items-center">
          Show more
          <span className="relative top-[3px] ml-[2px]">
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      {/* last part */}
      <div className=" flex flex-col justify-between mr-3 w-full sm:w-fit">
        <div className="bg-blue-300/30 flex flex-col gap-2 py-4 rounded-bl-lg rounded-br-lg px-4 w-full">
          <p className="font-semibold text-xl text-center">9.1</p>
          <p className="text-center">Very Good</p>

          <div className="flex  gap-[3px] justify-center">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                {i !== 4 && <FaStar color="#FFB80F" />}
                {i === 4 && <FaRegStar color="#FFB80F" />}
              </span>
            ))}
          </div>
        </div>
        <Button>View</Button>
      </div>
    </div>
  );
}

export default Item3;
