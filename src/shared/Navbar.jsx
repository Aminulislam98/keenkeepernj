import Navlinks from "@/utilities/Navlinks";
import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/timeline",
      name: "Timeline",
    },
    { id: 3, path: "/stats", name: "Stats" },
  ];
  return (
    <header className=" z-10 border-b border-line-strong bg-ink-950 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between bg-ink-950 text-cream">
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
          <div className="leading-none text-cream-muted">
            <div className="font-serif text-[22px] font-medium text-cream">
              KeenKeeper
            </div>
            <div className="font-mono text-[9px] tracking-micro uppercase text-cream-dim mt-1">
              The Relationship Almanac
            </div>
          </div>
        </Link>

        {/* <!-- Center nav links --> */}
        <nav className="hidden md:flex items-center gap-10 font-mono text-[12px] tracking-tiny uppercase">
          {navLinks.map((link) => (
            <Navlinks key={link.id} path={link.path}>
              {link.name}
            </Navlinks>
          ))}
        </nav>

        {/* <!-- Right: search + add button --> */}
        <div className="flex items-center gap-3">
          <button className="bg-cream text-black hover:bg-gold font-mono text-[11px] tracking-tiny uppercase px-4 py-2 rounded-sm flex items-center gap-2 transition hover:-translate-y-px">
            <HiPlus /> Add Friends
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
