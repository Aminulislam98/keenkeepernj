import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="relative z-10 border-b border-[#3a3225] bg-[#13110e]">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between bg-[#13110e] text-[#f3ead9]">
        {/* <!-- Logo + wordmark --> */}
        <Link href="/" className="flex items-center gap-3">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
            <rect
              x="1"
              y="1"
              width="38"
              height="38"
              rx="2"
              stroke="#f3ead9"
              strokeWidth="1"
            />
            <path
              d="M12 10 L12 30 M12 20 L22 10 M12 20 L22 30 M26 14 L30 14 M26 22 L30 22 M26 30 L30 30"
              stroke="#d4a24c"
              strokeWidth="1.4"
              strokeLinecap="square"
            />
          </svg>
          <div className="leading-none text-[#c9bfa8]">
            <div className="font-serif text-[22px] font-medium text-[#f3ead9]">
              KeenKeeper
            </div>
            <div className="font-mono text-[9px] tracking-micro uppercase text-cream-dim mt-1">
              The Relationship Almanac
            </div>
          </div>
        </Link>

        {/* <!-- Center nav links --> */}
        <nav className="hidden md:flex items-center gap-10 font-mono text-[12px] tracking-tiny uppercase">
          <Link
            href=""
            className="relative text-cream after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:bg-gold"
          >
            Home
          </Link>
          <Link
            href=""
            className="text-cream-muted hover:text-cream transition"
          >
            Timeline
          </Link>
          <Link
            href=""
            className="text-cream-muted hover:text-cream transition"
          >
            Stats
          </Link>
        </nav>

        {/* <!-- Right: search + add button --> */}
        <div className="flex items-center gap-3">
          <button className="bg-[#f3ead9] text-black hover:bg-[#e8c170] font-mono text-[11px] tracking-tiny uppercase px-4 py-2 rounded-sm flex items-center gap-2 transition hover:-translate-y-px">
            <HiPlus /> Add Friends
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
