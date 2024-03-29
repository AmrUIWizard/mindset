import React from "react";

const Footer = () => {
  return (
    <div className="p-3 mt-auto text-xl w-full text-center mb-2 text-slate-400 border-t-[1px] border-slate-8">
      Developed By:{" "}
      <span
        onClick={() => window.open("https://amrabdelrhman.com", "_blank")}
        className="text-[var(--primary-color)] font-bold cursor-pointer hover:text-[#79632e] "
      >
        Amr Abdelrhman
      </span>
    </div>
  );
};

export default Footer;
