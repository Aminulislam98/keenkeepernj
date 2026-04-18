// components/ProfileCardSkeleton.jsx
import React from "react";

const ProfileCardSkeleton = () => {
  return (
    <div className="bg-ink-800 border border-line rounded-sm p-6 animate-pulse max-w-7xl mx-auto my-10">
      {/* Top row: avatar + id */}
      <div className="flex justify-between items-start mb-5">
        <div className="w-12 h-12 rounded-sm bg-line-strong/40 border border-line-strong"></div>
        <div className="h-2.5 w-4 bg-line-strong/40 rounded-sm"></div>
      </div>

      {/* Name */}
      <div className="h-6 bg-line-strong/40 rounded-sm w-2/3 mb-3"></div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-1">
        <div className="h-4 w-14 bg-line-strong/30 rounded-sm"></div>
        <div className="h-4 w-20 bg-line-strong/30 rounded-sm"></div>
      </div>

      {/* Bio — 2 lines */}
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-line-strong/25 rounded-sm w-full"></div>
        <div className="h-3 bg-line-strong/25 rounded-sm w-5/6"></div>
      </div>

      {/* Dotted divider — real one, matches your card */}
      <div className="my-4 h-px bg-[linear-gradient(to_right,#3a3225_1px,transparent_1px)] [background-size:8px_1px]"></div>

      {/* Bottom row: status pill + days ago */}
      <div className="flex items-center justify-between">
        <div className="h-6 w-20 bg-line-strong/30 border border-line-strong rounded-full"></div>
        <div className="h-2.5 w-12 bg-line-strong/30 rounded-sm"></div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
