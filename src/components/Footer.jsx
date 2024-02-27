import Option from "./Option";

function Footer() {
  return (
    <div className="flex flex-row w-full bg-[#212731] text-slate-200 justify-evenly gap-2 px-2  pb-14 pt-6 md:pt-8 md:pb-20">
      <div className="space-y-5">
        <p className="uppercase font-semibold">Categories</p>
        <div className="space-y-2 text-sm">
          {["web builder", "hosting", "data center", "robotic-automation"].map(
            (item) => (
              <p key={item} className="capitalize">
                {item}
              </p>
            )
          )}
        </div>
      </div>
      <div className="space-y-5">
        <p className="uppercase font-semibold">Contact</p>
        <div className="space-y-2 text-sm">
          {[
            "Contact",
            "privacy policy",
            "terms of service",
            "categories",
            "about",
          ].map((item) => (
            <p key={item} className="capitalize">
              {item}
            </p>
          ))}
        </div>
      </div>
      <select className="self-center bg-transparent">
        <Option>United State</Option>
        <Option>India</Option>
        <Option>Pakistan</Option>
      </select>
    </div>
  );
}

export default Footer;
