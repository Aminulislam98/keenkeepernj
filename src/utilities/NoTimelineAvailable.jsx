"use client";
import Link from "next/link";
import React from "react";
const NoTimelineAvailable = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4 ">
      <div className="flex flex-col items-center text-center ">
        <h2 className="text-4xl font-medium text-gold tracking-tight mb-2.5">
          No timeline available
        </h2>

        <p className="text-sm text-cream-dim leading-relaxed max-w-[255px] mb-5">
          Get back here once you've made a call, sent a text, or started a video
          call.
        </p>
        <Link
          href={"/"}
          className="px-4 py-1 rounded-full text-black bg-gold hover:bg-cream-muted text-sm font-medium transition-colors duration-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NoTimelineAvailable;
