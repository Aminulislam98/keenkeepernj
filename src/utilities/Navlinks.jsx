"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = ({ path, children }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      href={path}
      className={`transition-all duration-200 relative text-cream-muted hover:text-white after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px  ${pathName === path ? "after:bg-gold text-white " : ""}`}
    >
      {children}
    </Link>
  );
};

export default Navlinks;
