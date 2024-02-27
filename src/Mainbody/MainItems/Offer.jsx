import Button from "../../components/Button";

function Offer() {
  return (
    <div className=" flex flex-col text-slate-600 text-sm gap-3">
      <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__" />
      <div className="flex flex-row gap-2 mx-2 text-[1.5vw] md:text-sm">
        <p className="bg-blue-200/50 px-2 py-1 rounded-md font-semibold text-[#074786]">
          20% off
        </p>
        <p className="bg-blue-200/50 rounded-md px-2 py-1 font-semibold text-[#074786]">
          Limited time
        </p>
      </div>
      <p className="font-bold self-center">Webbuilder 1</p>
      <p>Computer Modern classic with wix support</p>
      <div className="flex flex-row gap-2">
        <span className="font-bold text-[16px]">$39.96</span>
        <span className="text-[11px] relative top-[2px]">$49.96</span>
        <span className="text-[11px] relative top-[2px] text-red-400">
          (20% off)
        </span>
      </div>
      <Button>View Deal</Button>
    </div>
  );
}

export default Offer;
