import React from "react";

const BannerStatusbar = () => {
  return (
    <section class="border-b border-line max-w-full w-full mx-auto border-y border-[#3a3225]  bg-[#1a1713]">
      <div class="max-w-7xl w-full mx-auto px-8 py-4 flex items-center gap-3 flex-row justify-center border-y border-[#3a3225]  bg-[#1a1713] flex-wrap">
        {/* <!-- Active pill (gold accent) --> */}
        <button class="inline-flex items-center gap-1.5 px-3 py-1 border border-[#d4a24c] text-[#d4a24c] rounded-full text-[11px] tracking-[0.08em] uppercase whitespace-nowrap">
          All · 20
        </button>

        {/* <!-- Tag pills — derived from your data's "tags" arrays --> */}
        <button class="inline-flex items-center gap-1.5 px-3 py-1 border border-[#d4a24c] text-[#d4a24c] hover:text-cream rounded-full text-[11px] tracking-[0.08em] uppercase whitespace-nowrap transition">
          Close friend · 6
        </button>
        <button class="inline-flex items-center gap-1.5 px-3 py-1 border border-[#d4a24c] text-[#d4a24c] hover:text-cream rounded-full text-[11px] tracking-[0.08em] uppercase whitespace-nowrap transition">
          College · 4
        </button>
        <button class="inline-flex items-center gap-1.5 px-3 py-1 border border-[#d4a24c] text-[#d4a24c] hover:text-cream rounded-full text-[11px] tracking-[0.08em] uppercase whitespace-nowrap transition">
          Work · 3
        </button>

        <button class="inline-flex items-center gap-1.5 px-3 py-1 border border-[#d4a24c] text-[#d4a24c] hover:text-cream rounded-full text-[11px] tracking-[0.08em] uppercase whitespace-nowrap transition">
          Online · 2
        </button>
      </div>
    </section>
  );
};

export default BannerStatusbar;
