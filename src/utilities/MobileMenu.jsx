"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Navlinks from "@/utilities/Navlinks";

const MobileMenu = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger / Close toggle — mobile only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-cream hover:text-gold transition p-1"
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Mobile dropdown — drops below the sticky header */}
      {isOpen && (
        <nav className="md:hidden absolute left-0 right-0 top-full border-t border-line-strong bg-ink-950">
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-4 font-mono text-[12px] tracking-tiny uppercase">
            {navLinks.map((link) => (
              <div key={link.id} onClick={() => setIsOpen(false)}>
                <Navlinks path={link.path}>{link.name}</Navlinks>
              </div>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
