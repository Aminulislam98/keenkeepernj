"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = () => {
  const router = useRouter();
  return (
    <Link
      onClick={() => router.back()}
      href="index.html"
      className="hover:text-cream transition flex items-center gap-3 "
    >
      <FaArrowLeft />
      Go back |
    </Link>
  );
};

export default GoBack;
