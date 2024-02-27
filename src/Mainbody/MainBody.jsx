import MainContent from "./MainContent";
import MainFooter from "./MainFooter";
import MainHeading from "./MainHeading";

function MainBody() {
  return (
    <div className="mx-[15%] md:mx-[20%]">
      <MainHeading />
      <div className="flex flex-row flex-wrap text-slate-500 text-sm my-6">
        {["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"].map(
          (item, i) => (
            <p key={item}>
              {item}
              {i !== 4 && <span className="mx-3">&gt;</span>}
            </p>
          )
        )}
      </div>
      <MainContent />
      <MainFooter />
      <div className="flex flex-col items-center my-12 md:flex-row md:justify-around gap-0 md:gap-10  transition-all">
        <p className="text-3xl mb-4">Sign up and get exclusive special deals</p>
        <form className="flex flex-row">
          <input
            type="text"
            className="py-1 rounded-tl-lg rounded-bl-lg w-[40vw] md:w-[20vw] bg-slate-100 transition-all focus:outline-none px-2"
          />
          <span className="bg-[#1B88F4] text-slate-100 rounded-tr-lg rounded-br-lg px-2.5 py-2 text-sm ">
            Sign Up
          </span>
        </form>
      </div>
    </div>
  );
}

export default MainBody;
