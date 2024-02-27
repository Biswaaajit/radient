/* eslint-disable react/prop-types */
function Button({ children, style = "" }) {
  return (
    <button
      className={`bg-[#1B88F4] py-2 text-slate-200 rounded-lg px-12 ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
