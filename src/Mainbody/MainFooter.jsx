import Offer from "./MainItems/Offer";

function MainFooter() {
  return (
    <div>
      <p className="text-2xl md:text-3xl my-8 transition-all">
        Related deals you might like for
      </p>
      <div className="flex flex-row gap-6 flex-wrap justify-evenly md:flex-nowrap transition-all">
        <Offer />
        <Offer />
        <Offer />
      </div>
    </div>
  );
}

export default MainFooter;
