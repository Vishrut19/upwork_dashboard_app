import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 border-t-2 bg-white text-neutral-content">
        <aside className="items-center grid-flow-col">
          <button className="btn bg-white btn-outline text-[#9B9B9B] border-[#9B9B9B] rounded-lg w-[119px] font-manrope">
            Cancel
          </button>
        </aside>
        <aside className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <button className="btn text-white bg-[#0068FF] rounded-lg w-[160px] font-manrope border-none">
            Save & Continue
          </button>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
