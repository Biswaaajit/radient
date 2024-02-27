/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import Button from "../../components/Button";
import { IoIosArrowDown } from "react-icons/io";
function Item1({ children }) {
  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap  text-slate-600 gap-5 transition-all">
      <div className="flex flex-col justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__"
          alt="img"
          className="w-[18rem] md:w-48 transition-all"
        />
        <p className="text-center">Builder 1</p>
      </div>
      {/* middle part */}
      <div className="grow space-y-3">
        <p>
          <span className="font-semibold text-slate-800">
            WixPro 72-Inch Responsive Website Builder{" "}
          </span>
          - Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
        </p>
        <div>
          <p className="font-semibold text-slate-800 mb-2">Main highlights</p>
          <p className="ml-4">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
        </div>
        <div className="text-[#1B88F4] flex flex-row items-center">
          Show more
          <span className="relative top-[3px] ml-[2px]">
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      {/* last part */}
      <div className=" flex flex-col justify-between mr-3 w-full sm:w-fit transition-all ">
        <div className="bg-blue-300/30 flex flex-col gap-2 py-4 rounded-bl-lg rounded-br-lg px-4 w-full">
          <p className="font-semibold text-xl text-center">{children}</p>
          <p className="text-center">Exceptional</p>

          <div className="flex  gap-[3px] justify-center">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>
                <FaStar color="#FFB80F" />
              </span>
            ))}
          </div>
        </div>
        <Button>View</Button>
      </div>
    </div>
  );
}

export default Item1;
