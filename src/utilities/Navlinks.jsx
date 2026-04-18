import Link from "next/link";
import React from "react";

const Navlinks = ({ path, name }) => {
  return (
    <Link
      href={path}
      className="relative text-cream after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-px after:bg-gold"
    >
      {name}
    </Link>
  );
};

export default Navlinks;
